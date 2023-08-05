import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, Share, View } from "react-native";
import { styled } from "styled-components/native";
import api from "../../services/api";
import { key } from "../../services/key";
import Ionicons from "@expo/vector-icons/Ionicons"

export default function PhotoSpace() {

    const [apod, setApod] = useState([]);
    const [loading, setLoading] = useState(true);

    const date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth();
    let ano = date.getFullYear();

    let mees = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let data = `${dia} de ${mees[mes]} de ${ano}`

    useEffect(() => {
        (async () => {
            await api.get(`/planetary/apod?api_key=${key}`)
                .then(async (current) => {
                    setApod(await current.data);
                })
                .catch((err) => {
                    console.log(err)
                })
        })()
    }, [])

    async function share() {
        await Share.share({
            message: `Imagem astronômica do dia: ${apod.title} \n${apod.url}`
        })
            .catch(() => { Alert('Não foi possível realizar o compartilhamento') })
    }

    function loadImage() {
        setLoading(false);
    }

    return (
        <Container>

            <ImageBackground source={require("../../img/wallpaper1.jpg")}>

                {apod.url == undefined ?

                    <Loading>Carregando...</Loading> :

                    <ScrollView>
                        <Data>{data}</Data>
                        {loading && <ActivityIndicator size={50} color={'red'} style={{ marginVertical: 175 }} />}

                        <View style={{ display: loading ? 'none' : 'flex' }}>
                            <Photo
                                source={{ uri: apod.url }}
                                resizeMode="contain"
                                onLoad={loadImage}
                            />
                        </View>

                        <Title>{apod.title}</Title>
                        <Credit>Crédito da imagem: {apod.copyright}</Credit>

                        <ViewButtons>
                            <Button onPress={share}>
                                <TextButton>Salvar <Ionicons name="download-outline" size={20} /></TextButton>
                            </Button>

                            <Button onPress={share}>
                                <TextButton>Compartilhar <Ionicons name="share-social" size={20} /></TextButton>
                            </Button>
                        </ViewButtons>
                    </ScrollView>
                }

            </ImageBackground>
        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
`;

const ImageBackground = styled.ImageBackground`
flex: 1;
`;

const Loading = styled.Text`
font-size: 17px;
color: #FFF;
text-align: center;
flex: 1;
margin-top: 50%;
`;

const Data = styled.Text`
color: #FFF;
text-align: center;
font-size: 16px;
padding: 6px 0;
margin-top: 20px;
`;

const Photo = styled.Image`
width: 100%;
height: 400px;
margin: 4px 0;
align-self: center;
`;

const Title = styled.Text`
font-size: 20px;
color: #FFF;
text-align: center;
padding-bottom: 16px;
`;

const Credit = styled.Text`
color: #FFF;
margin-top: 2px;
text-align: center;
margin-bottom: 20px;
`;

const ViewButtons = styled.View`
flex-direction: row;
justify-content: space-around;
`;

const Button = styled.TouchableOpacity`
background-color: #000080;
border-width: 1px;
border-color: #FFF;
border-radius: 5px;
align-self: center;
padding: 7px 10px;
margin-bottom: 5%;
`;

const TextButton = styled.Text`
color: #FFF;
text-align: center;
font-size: 18px;
`;
