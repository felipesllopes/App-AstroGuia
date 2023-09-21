import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { styled } from "styled-components/native";
import ButtonBack from "../../Components/ButtonBack";
import { downloadFromUrl, sharedFromUrl } from "../../Components/HandleDownloadImg";
import LogoLoading from "../../Components/LogoLoading";
import api from "../../services/api";
import { key } from "../../services/key";

export default function AstronomicalPhoto() {

    const [apod, setApod] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const current = await api.get(`/planetary/apod?api_key=${key}`);
                setApod(await current.data);
            } catch (err) {
                alert('Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
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

                        <Photo
                            style={{ display: loading ? 'none' : 'flex' }}
                            source={{ uri: apod.url }}
                            resizeMode="contain"
                            onLoad={loadImage}
                        />

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

const ScrollView = styled.ScrollView`
`;

const Title = styled.Text`
font-size: 20px;
color: #FFF;
text-align: center;
padding: 20px 0 10px 0;
`;

const ActivityIndicator = styled.ActivityIndicator``;

const Photo = styled.Image`
width: 100%;
aspect-ratio: 1;
align-self: center;
height: auto;
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
