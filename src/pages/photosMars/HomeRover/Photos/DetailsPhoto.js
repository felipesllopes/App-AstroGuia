import Ionicons from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Share } from "react-native";
import { styled } from "styled-components/native";
import { Container, Wallpaper, Screen } from "../../../../Components/styledBackgroundMars";

export default function DetailsPhoto() {

    const route = useRoute();
    const [favorite, serFavorite] = useState(false);

    async function handleFavorite() {
        serFavorite(current => (current === true ? false : true))
    }

    async function handleShare() {
        await Share.share({
            message: `Foto rover ${route.params?.data.rover.name} em Marte. \n${route.params?.data.img_src}`
        })
    }

    return (
        <Container>
            <Wallpaper source={require('../../../../img/martian.png')}>
                <Screen>

                    <ContainerInfo>
                        <Photo source={{ uri: route.params?.data.img_src }} />
                        <Text>Rover: {route.params?.data.rover.name}</Text>
                        <Text>Câmera: {route.params?.data.camera.full_name}</Text>
                        <Text>Dia marciano: {route.params?.data.sol}</Text>
                        <Text>Data: {route.params?.data.earth_date}</Text>

                        <BoxButton>
                            <Ionicons name={favorite ? "bookmark" : "bookmark-outline"} size={30} onPress={handleFavorite} />

                            <Ionicons name="share-social" size={30} onPress={handleShare} />
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
