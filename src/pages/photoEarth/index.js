import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { styled } from "styled-components/native";
import { downloadFromUrl, sharedFromUrl } from "../../Components/HandleDownloadImg";
import api from "../../services/api";
import { key } from "../../services/key";
import LogoLoading from "../../Components/LogoLoading";
import ButtonBack from "../../Components/ButtonBack";

export default function PhotoEarth() {

    const [epic, setEpic] = useState([]);
    const [select, setSelect] = useState(0);
    const [loading, setLoading] = useState(true);
    let year = epic[select] && epic[select].date.substring(0, 4);
    let month = epic[select] && epic[select].date.substring(5, 7);
    let day = epic[select] && epic[select].date.substring(8, 10);
    let epicItem = 0;

    useEffect(() => {
        (async () => {
            await api.get(`/EPIC/api/natural?api_key=${key}`)
                .then(async (current) => {
                    setEpic(await current.data);
                })
                .catch(() => {
                    alert("Ocorreu um erro inesperado.")
                })
        })()
        setLoading(true);
    }, [select])

    async function share() {
        await sharedFromUrl(`https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${epic[select].image}.png?api_key=${key}`)
    }

    async function download() {
        let url = `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${epic[select].image}.png?api_key=${key}`;
        let subtitle = "Foto da Terra";

        await downloadFromUrl(url, subtitle)
    }

    function loadImage() {
        setLoading(false);
    }

    return (
        <Container>
            {epic[select] == undefined

                ? <LogoLoading /> :

                <ScrollView>

                    <ButtonBack pag={"Foto Policromática da Terra"} />

                    <Description>Estas imagens foram tiradas pela câmera EPIC da NASA a bordo do satélite NOAA DSCOVR</Description>

                    <PickerDate>
                        <Picker
                            dropdownIconColor={'#000'}
                            selectedValue={select}
                            onValueChange={(item, index) => { setSelect(item) }}
                        >
                            {epicItem = epic.map((v, k) => {
                                return <Picker.Item key={k} value={k} label={v.date} />
                            })}
                        </Picker>
                    </PickerDate>

                    {loading && <ActivityLoading size={50} color={'#F00'} />}

                    <View style={{ display: loading ? 'none' : 'flex' }}>
                        < ImageEarth
                            source={{ uri: `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${epic[select].image}.png?api_key=${key}` }}
                            onLoad={loadImage}
                        />

                        <ViewButtons>
                            <Ionicons
                                name="download-outline"
                                size={33}
                                color={'#FFF'}
                                onPress={download}
                            />

                            <Ionicons
                                name="share-social"
                                size={33}
                                color={'#FFF'}
                                onPress={share}
                            />
                        </ViewButtons>
                    </View>

                </ScrollView>
            }
        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
background-color: #000;
`;

const Description = styled.Text`
font-size: 16px;
color: #FFF;
text-align: center;
margin-bottom: 8px;
margin: 15px 10px 8px 10px;
`;

const PickerDate = styled.View`
align-self: center;
background-color: #FFF;
margin-top: 20px;
width: 60%;
height: 45px;
justify-content: center;
border-radius: 8px;
`;

const ActivityLoading = styled.ActivityIndicator`
margin: 200px 0;
`;

const ImageEarth = styled.Image`
height: 450px;
width: 450px;
align-self: center;
`;

const ViewButtons = styled.View`
flex-direction: row;
justify-content: space-around;
margin-bottom: 10%;
`;