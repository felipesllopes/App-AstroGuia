import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { ScrollView, Share, View } from "react-native";
import { styled } from "styled-components/native";
import api from "../../services/api";
import { key } from "../../services/key";

export default function PhotoEarth() {

    const [epic, setEpic] = useState([]);
    const [select, setSelect] = useState(0);
    const [loading, setLoading] = useState(true);
    let epicItem = 0;

    useEffect(() => {
        (async () => {
            await api.get(`/EPIC/api/natural?api_key=${key}`)
                .then(async (current) => {
                    setEpic(await current.data);
                })
                .catch((err) => {
                    alert("Ocorreu um erro inesperado.")
                })
        })()
        setLoading(true);
    }, [select])

    async function share() {
        await Share.share({
            message: `Foto da Terra: \nhttps://api.nasa.gov/EPIC/archive/natural/${epic[select].date.substring(0, 4)}/${epic[select].date.substring(5, 7)}/${epic[select].date.substring(8, 10)}/png/${epic[select].image}.png?api_key=${key}`
        })
            .catch(() => { alert("Ocorreu um erro inesperado.") })
    }

    function loadImage() {
        setLoading(false);
    }

    return (
        <Container>

            {epic[select] == undefined ?
                <Loading>Carregando...</Loading>
                :
                <ScrollView>
                    <Description>Estas imagens foram tiradas pela câmera EPIC da NASA a bordo do satélite NOAA DSCOVR</Description>

                    <PickerDate>
                        <Picker
                            selectedValue={select}
                            onValueChange={(item, index) => { setSelect(item) }}
                        >
                            {epicItem = epic.map((v, k) => {
                                return <Picker.Item key={k} value={k} label={v.date} />
                            })}
                        </Picker>
                    </PickerDate>

                    {loading && <ActivityLoading size={50} color={'#F00'}/>}

                    <View style={{ display: loading ? 'none' : 'flex' }}>
                        < ImageEarth
                            source={{ uri: `https://api.nasa.gov/EPIC/archive/natural/${epic[select].date.substring(0, 4)}/${epic[select].date.substring(5, 7)}/${epic[select].date.substring(8, 10)}/png/${epic[select].image}.png?api_key=${key}` }}
                            onLoad={loadImage}
                        />

                        <View style={{ alignItems: 'center' }}>
                            <Button onPress={share}>
                                <TextButton>Compartilhar</TextButton>
                            </Button>
                        </View>
                    </View>

                </ScrollView>
            }

        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
background-color: #000;
`

const Loading = styled.Text`
flex: 1;
font-size: 17px;
color: #FFF;
text-align: center;
margin-top: 50%;
`

const Description = styled.Text`
font-size: 17px;
color: #FFF;
text-align: center;
margin-bottom: 8px;
margin: 15px 10px 8px 10px;
`

const PickerDate = styled.View`
align-self: center;
background-color: #FFF;
margin-top: 20px;
width: 60%;
height: 45px;
justify-content: center;
border-radius: 8px;
`

const ActivityLoading = styled.ActivityIndicator`
margin: 200px 0;
`

const ImageEarth = styled.Image`
height: 450px;
width: 450px;
align-self: center;
`

const Button = styled.TouchableOpacity`
background-color: #000080;
padding: 7px 10px;
border-radius: 6px;
border-width: 1px;
border-color: #FFF;
margin-bottom: 5%;
`

const TextButton = styled.Text`
font-size: 18px;
color: #FFF;
`
