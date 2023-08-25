import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { styled } from "styled-components/native";
import ButtonBack from "../../Components/ButtonBack";
import { downloadFromUrl, sharedFromUrl } from "../../Components/HandleDownloadImg";
import LogoLoading from "../../Components/LogoLoading";
import api from "../../services/api";
import { key } from "../../services/key";

export default function PhotoSpace() {

    const [apod, setApod] = useState([]);
    const [loading, setLoading] = useState(true);

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


    async function handleDownload() {
        downloadFromUrl(apod.url, "Foto astronômica do dia")
    }

    async function handleShare() {
        sharedFromUrl(apod.url);
    }

    function loadImage() {
        setLoading(false);
    }

    return (
        <Container>

            <ImageBackground source={require("../../img/wallpaper1.jpg")}>

                {apod.url == undefined

                    ? <LogoLoading /> :

                    < ScrollView >

                        <ButtonBack pag={"Foto Astronômica do dia"} />

                        <Title>{apod.title}</Title>

                        {loading && <ActivityIndicator size={50} color={'red'} style={{ marginVertical: 175 }} />}

                        <View style={{ display: loading ? 'none' : 'flex' }}>
                            <Photo
                                source={{ uri: apod.url }}
                                resizeMode="contain"
                                onLoad={loadImage}
                            />
                        </View>

                        <Credit style={{ display: apod.copyright ? 'flex' : 'none' }}>Crédito: {apod.copyright}</Credit>

                        <ViewButtons style={{ display: loading ? 'none' : 'flex' }}>
                            <Ionicons
                                name="download-outline"
                                size={33}
                                color={'#FFF'}
                                onPress={handleDownload}
                            />

                            <Ionicons
                                name="share-social"
                                size={33}
                                color={'#FFF'}
                                onPress={handleShare}
                            />
                        </ViewButtons>
                    </ScrollView>
                }

            </ImageBackground>
        </Container >
    )
}

const Container = styled.SafeAreaView`
flex: 1;
`;

const ImageBackground = styled.ImageBackground`
flex: 1;
`;

const ScrollView = styled.ScrollView``;

const Title = styled.Text`
font-size: 20px;
color: #FFF;
text-align: center;
padding: 20px 0 10px 0;
`;

const ActivityIndicator = styled.ActivityIndicator``;
const View = styled.View``;

const Photo = styled.Image`
width: 100%;
aspect-ratio: 1;
margin: 4px 0;
align-self: center;
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
margin-bottom: 10%;
`;
