import { Picker } from "@react-native-picker/picker";
import { useLayoutEffect, useState } from "react";
import { Keyboard } from "react-native";
import { styled } from "styled-components/native";
import api from "../../services/api";
import { key } from "../../services/key";
import ListPhotosMars from "./listPhotosMars";

export default function PhotosMars({ route, navigation }) {

    const roverr = route.params?.rover;
    const [roverPhotos, setRoverPhotos] = useState([]);
    const [sol, setSol] = useState('0');
    const [camera, setCamera] = useState(0);
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    let cam = [];

    if (roverr == 'Curiosity') {
        cam = ["FHAZ", "RHAZ", "MASTRO", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"];
    } else {
        cam = ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"];
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: roverr,
        })
    }, [])

    async function search() {

        if (sol == '' || sol < 0) {
            return
        }
        setLoading(true)
        await api.get(`/mars-photos/api/v1/rovers/${roverr}/photos?sol=${sol}&camera=${cam[camera]}&api_key=${key}`)
            .then(async (current) => {
                setRoverPhotos(await current.data);

                if (current.data.photos.length == 0) {
                    setResult("Nenhum resultado encontrado.")
                }
            })
            .catch(() => {
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

            <ContainerForm>
                <Form>
                    <FormText>Sol: </FormText>
                    <SolText
                        value={sol}
                        onChangeText={setSol}
                        keyboardType="numeric"
                        maxLength={4}
                    />
                </Form>

                <Form>
                    <FormText>Câmera: </FormText>
                    <ViewPicker>
                        <Picker
                            selectedValue={camera}
                            onValueChange={(item, index) => { setCamera(item) }}
                        >
                            {cam.map((v, k) => {
                                return <Picker.Item key={k} value={k} label={v} />
                            })}
                        </Picker>
                    </ViewPicker>
                </Form>
            </ContainerForm>

            <ButtonSearch activeOpacity={0.6} onPress={search}>
                {loading ? <ActivityIndicator size={27} color={'#000'} />
                    :
                    <TextButtonSearch>Pesquisar</TextButtonSearch>
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
                                numColumns={3}
                                data={roverPhotos.photos}
                                renderItem={renderList}
                                showsVerticalScrollIndicator={false}
                            />
                        </ViewResult>
                    }
                </View>
            }

        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
background-color: #CD853F;
`

const ContainerForm = styled.View`
background-color: black;
flex-direction: row;
justify-content: space-around;
padding-bottom: 3px;
`;

const Form = styled.View`
flex-direction: row;
align-items: center;
margin: 3px 30px;
`

const FormText = styled.Text`
font-size: 17px;
color: #FFF;
`

const SolText = styled.TextInput`
font-size: 17px;
background-color: #FFF;
width: 35%;
height: 30px;
text-align: center;
border-radius: 10px;
`

const ViewPicker = styled.View`
width: 175px;
height: 30px;
border-radius: 10px;
background-color: #FFF;
justify-content: center;
`

const ButtonSearch = styled.TouchableOpacity`
background-color: #FFF;
align-self: center;
border-color: #555;
border-width: 2px;
border-radius: 10px;
margin: 15px 0;
padding: 2px 10px;
`

const TextButtonSearch = styled.Text`
font-size: 17px;
text-align: center;
font-weight: bold;
`

const NotResult = styled.Text`
font-size: 20px;
text-align: center;
margin: 50px 0;
font-style: italic;
`

const ViewResult = styled.View``;

const Result = styled.Text`
font-size: 17px;
color: #FFF;
background-color: #000;
`

const ListRover = styled.FlatList`
background-color: #FFF;
height: 95%;
`

const View = styled.View`
flex: 1;
`;

const ActivityIndicator = styled.ActivityIndicator``;