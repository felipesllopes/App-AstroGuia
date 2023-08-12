import Ionicons from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { styled } from "styled-components/native";
import { sharedFromUrl, downloadFromUrl } from "../../../../Components/HandleDownloadImg";
import { Container, Screen, Wallpaper } from "../../../../Components/styledBackgroundMars";
import { addItem, isFavorite, rmvItem } from "../../../../Storage/asyncStorage";

export default function DetailsPhoto() {

    const route = useRoute();
    const [favorite, setFavorite] = useState();
    const data = route.params?.data;

    useEffect(() => {
        (async () => {
            setFavorite(await isFavorite(data))
        })()
    }, [])

    async function handleFavorite() {

        if (favorite) {
            setFavorite(false)
            await rmvItem(data.id);
        } else {
            setFavorite(true);
            await addItem(data);
        }
    }

    async function handleDownload() {
        console.log("Clicou para download");
        await downloadFromUrl(route.params?.data.img_src)
    }

    async function handleShare() {
        console.log("Clicou para compartilhar")
        await sharedFromUrl(route.params?.data.img_src);
    }

    return (
        <Container>
            <Wallpaper source={require('../../../../img/martian.png')}>
                <Screen>

                    <ContainerInfo>
                        <Photo source={{ uri: route.params?.data.img_src }} />
                        <Text>Rover: {data.rover.name}</Text>
                        <Text>Câmera: {data.camera.full_name}</Text>
                        <Text>Dia marciano: {data.sol}</Text>
                        <Text>Data: {data.earth_date}</Text>

                        <BoxButton>
                            <Ionicons
                                name={favorite ? "bookmark" : "bookmark-outline"}
                                size={30}
                                onPress={handleFavorite}
                            />

                            <Ionicons
                                name={"download"}
                                size={30}
                                onPress={handleDownload}
                            />

                            <Ionicons
                                name="share-social"
                                size={30}
                                onPress={handleShare}
                            />
                        </BoxButton>
                    </ContainerInfo>

                </Screen>
            </Wallpaper>
        </Container>
    )
}

const ContainerInfo = styled.View`
border-width: 2px;
border-color: #000;
border-radius: 14px;
margin: 30px 10px 0 10px;
background-color: rgba(230,230,230,0.5);
padding-bottom: 5px;
`;

const Photo = styled.Image`
width: 370px;
height: 370px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
margin-bottom: 10px;
`;

const Text = styled.Text`
font-size: 18px;
text-align: center;
`;

const BoxButton = styled.View`
flex-direction: row;
justify-content: space-between;
margin: 12px 20px;
`;
