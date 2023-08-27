import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { styled } from "styled-components/native";
import { downloadFromUrl, sharedFromUrl } from "../../../../Components/HandleDownloadImg";
import { addItem, isFavorite, rmvItem } from "../../../../Storage/asyncStorage";

export default function ModalMars({ data, visible }) {

    const [favorite, setFavorite] = useState();

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
        let url = data.img_src;
        let subtitle = "Imagem rover " + data.rover.name;

        await downloadFromUrl(url, subtitle)
    }

    async function handleShare() {
        await sharedFromUrl(data.img_src);
    }

    return (
        <Screen>
            <Container>

                <ButtonClose name="close" size={30} onPress={visible} />

                <Photo source={{ uri: data.img_src }} />
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
                        name={"download-outline"}
                        size={30}
                        onPress={handleDownload}
                    />

                    <Ionicons
                        name="share-social"
                        size={30}
                        onPress={handleShare}
                    />
                </BoxButton>

            </Container>
        </Screen>
    )
}

const Screen = styled.View`
background-color: rgba(300,300,300, 0.7);
flex: 1;
width: 100%;
justify-content: center;
align-items: center;
`;

const Container = styled.View`
border-width: 2px;
border-radius: 14px;
width: 90%;
background-color: #DDD;
`;

const ButtonClose = styled(Ionicons)`
align-self: flex-end;
margin-right: 3px;
`;

const Photo = styled.Image`
width: 350px;
height: 350px;
margin-bottom: 10px;
align-self: center;
`;

const Text = styled.Text`
font-size: 18px;
text-align: center;
`;

const BoxButton = styled.View`
flex-direction: row;
justify-content: space-around;
margin: 12px 0;
`;
