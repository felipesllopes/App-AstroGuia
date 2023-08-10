import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Keyboard } from "react-native";
import { styled } from "styled-components/native";
import ListPhotosMars from "../../../../Components/ListPhotosMars";
import { Container, Screen, Wallpaper } from "../../../../Components/styledBackgroundMars";
import api from "../../../../services/api";
import { key } from "../../../../services/key";
import Ionicons from "@expo/vector-icons/Ionicons"
import { useRef } from "react";

export default function PhotosMars({ route }) {

    const roverr = route.params?.rover;
    const [roverPhotos, setRoverPhotos] = useState([]);
    const [sol, setSol] = useState('0');
    const [camera, setCamera] = useState(0);
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const pickerRef = useRef(null);
    let cam = [];

    if (roverr == 'Curiosity') {
        cam = ["FHAZ", "RHAZ", "MASTRO", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"];
    } else {
        cam = ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"];
    }

    async function search() {
        Keyboard.dismiss();

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
    }

    function renderList({ item }) {
        return (<ListPhotosMars data={item} />)
    }

    function handlePicker() {
        if (pickerRef.current) {
            pickerRef.current.focus();
        }
    }

    return (
        <Container>
            <Wallpaper source={require('../../../../img/martian.png')}>
                <Screen>

                    <ContainerForm>
                        <Form style={{ justifyContent: 'space-between' }}>
                            <Form>
                                <Ionicons name="camera" size={30} color={'#FFF'} onPress={handlePicker} />
                                <FormText>: </FormText>
                                <ViewPicker>
                                    <Pickerr
                                        ref={pickerRef}
                                        dropdownIconColor={'none'}
                                        selectedValue={camera}
                                        enabled={false}
                                        onValueChange={(item, index) => { setCamera(item) }}
                                    >
                                        {cam.map((v, k) => {
                                            return <Picker.Item key={k} value={k} label={v} />
                                        })}
                                    </Pickerr>
                                </ViewPicker>
                            </Form>

                            <Form>
                                <FormText>Sol:  </FormText>
                                <SolText
                                    value={sol}
                                    onChangeText={setSol}
                                    keyboardType="numeric"
                                    maxLength={4}
                                />
                            </Form>
                        </Form>

                        <Form style={{ justifyContent: 'space-between' }}>

                            <Result>Resultados: {roverPhotos.photos && roverPhotos.photos.length}</Result>

                            <ButtonSearch activeOpacity={0.6} onPress={search}>
                                {loading ? <ActivityIndicator size={24} color={'#000'} />
                                    :
                                    <TextButtonSearch>Pesquisar</TextButtonSearch>
                                }
                            </ButtonSearch>
                        </Form>
                    </ContainerForm>

                    {roverPhotos.photos && roverPhotos.photos.length == 0
                        ?
                        <NotResult>{result}</NotResult>
                        :
                        <ListRover
                            numColumns={3}
                            data={roverPhotos.photos}
                            renderItem={renderList}
                            showsVerticalScrollIndicator={false}
                        />
                    }

                </Screen>
            </Wallpaper>
        </Container>
    )
}

const ContainerForm = styled.View`
background-color: #000;
justify-content: space-around;
padding-bottom: 3px;
width: 100%;
`;

const Form = styled.View`
flex-direction: row;
align-items: center;
margin: 2px;
`

const FormText = styled.Text`
font-size: 17px;
color: #FFF;
`

const ViewPicker = styled.View`
width: 175px;
height: 30px;
justify-content: center;
`

const Pickerr = styled(Picker)`
color: #FFF;
`;

const Result = styled.Text`
font-size: 16px;
color: #FFF;
background-color: #000;
margin: 0 2px;
`

const SolText = styled.TextInput`
font-size: 17px;
width: 80px;
height: 30px;
text-align: center;
border-radius: 10px;
color: #FFF;
border-width: 1px;
border-color: #FFF;
background-color: #333;
`

const ButtonSearch = styled.TouchableOpacity`
background-color: #FFF;
border-color: #555;
border-width: 1px;
border-radius: 10px;
padding: 2px 10px;
margin-right: 1px;
width: 120px;
height: 31px;
`

const ActivityIndicator = styled.ActivityIndicator``;

const TextButtonSearch = styled.Text`
font-size: 17px;
text-align: center;
font-weight: bold;
`

const NotResult = styled.Text`
font-size: 19px;
text-align: center;
margin: 50% 0;
font-style: italic;
`

const ListRover = styled.FlatList`
height: 95%;
margin: 1px;
`

