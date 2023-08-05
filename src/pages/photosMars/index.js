import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Keyboard } from "react-native";
import { styled } from "styled-components/native";
import api from "../../services/api";
import { key } from "../../services/key";
import ListPhotosMars from "./listPhotosMars";
import roverV from "./rover";

export default function PhotosMars() {

    const [roverPhotos, setRoverPhotos] = useState([]);
    const [sol, setSol] = useState('0');
    const [rover, setRover] = useState(0);
    const [camera, setCamera] = useState(0);
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    async function search() {
        setLoading(true)
        await api.get(`/mars-photos/api/v1/rovers/${roverV[rover].rover}/photos?sol=${sol}&camera=${roverV[rover].camera[camera]}&api_key=${key}`)
            .then(async (current) => {
                setRoverPhotos(await current.data);

                if (current.data.photos.length == 0) {
                    setResult("Nenhum resultado encontrado.")
                }
            })
            .catch((err) => {
                alert('Ocorreu um erro inesperado.')
                setLoading(false);
            })
        setLoading(false);
        Keyboard.dismiss();
    }

    function renderList({ item }) {
        return (<ListPhotosMars data={item} />)
    }

    return (
        <Container>
            <ScrollView>

                <ImageHeader source={require("../../img/marsHeader.jpg")} />

                <Form>
                    <FormText>Sol marciano (0 a 1004): </FormText>
                    <SolText
                        value={sol}
                        onChangeText={setSol}
                        keyboardType="numeric"
                        maxLength={4}
                    />
                </Form>

                {sol == undefined || sol == "" || sol > 1004 ? <View></View>
                    :
                    <View>
                        <Form>
                            <FormText>Rover: </FormText>
                            <ViewPicker>
                                <Picker
                                    selectedValue={rover}
                                    onValueChange={(item, index) => { setRover(item) }}
                                >
                                    {roverV.map((v, k) => {
                                        return <Picker.Item key={k} value={k} label={v.rover} />
                                    })}
                                </Picker>
                            </ViewPicker>
                        </Form>

                        <Form>
                            <FormText>Câmera: </FormText>
                            <ViewPicker>
                                <Picker
                                    selectedValue={camera}
                                    onValueChange={(item, index) => { setCamera(item) }}
                                >
                                    {roverV[rover].camera.map((v, k) => {
                                        return <Picker.Item key={k} value={k} label={v} />
                                    })}
                                </Picker>
                            </ViewPicker>
                        </Form>

                        <ButtonSearch activeOpacity={0.6} onPress={search}>
                            {loading ? <ActivityIndicator size={27} color={'#000'} />
                                :
                                <TextButtonSearch>Buscar</TextButtonSearch>
                            }
                        </ButtonSearch>

                        {roverPhotos.photos &&
                            <View>
                                {roverPhotos.photos.length == 0
                                    ?
                                    <NotResult>{result}</NotResult>
                                    :
                                    <ViewResult>
                                        <Result>Resultados: {roverPhotos.photos.length}</Result>
                                        <ListRover
                                            data={roverPhotos.photos}
                                            renderItem={renderList}
                                            horizontal={true}
                                        />
                                    </ViewResult>
                                }
                            </View>
                        }

                    </View>
                }

            </ScrollView>
        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
background-color: #CD853F;
`

const ImageHeader = styled.Image`
height: 200px;
width: 100%;
`

const Form = styled.View`
flex-direction: row;
align-items: center;
margin: 6px 20px 6px 6px;
justify-content: flex-end;
`

const FormText = styled.Text`
font-size: 19px;
font-weight: bold;
`

const SolText = styled.TextInput`
font-size: 18px;
background-color: #FFF;
width: 15%;
text-align: center;
border-width: 2px;
border-radius: 3px;
padding: 2px 0;
`

const ViewPicker = styled.View`
width: 200px;
height: 45px;
border-width: 2px;
border-radius: 6px;
background-color: #FFF;
justify-content: center;
`

const ButtonSearch = styled.TouchableOpacity`
background-color: #FFF;
width: 100px;
align-self: center;
border-color: #555;
border-width: 2px;
border-radius: 18px;
margin: 15px 0;
padding: 4px 0;
`

const TextButtonSearch = styled.Text`
font-size: 18px;
text-align: center;
font-weight: bold;
`

const NotResult = styled.Text`
font-size: 20px;
text-align: center;
margin: 50px 0;
font-style: italic;
`

const ViewResult = styled.View`
background-color: #000;
`

const Result = styled.Text`
font-size: 17px;
margin: 3px 0 0 3px;
color: #FFF;
`

const ListRover = styled.FlatList`
background-color: #FFF;
margin: 5px 0;
padding: 2px 0;
`

const View = styled.View``;
const ScrollView = styled.ScrollView``;
const ActivityIndicator = styled.ActivityIndicator``;