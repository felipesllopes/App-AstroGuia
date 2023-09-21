import Ionicons from "@expo/vector-icons/Ionicons";
import { styled } from "styled-components/native";
import { downloadFromUrl, sharedFromUrl } from "../../Components/HandleDownloadImg";

export default function ModalEarth({ closeModal, url, datatime }) {

    async function download() {
        let subtitle = "Foto policromática da Terra";
        await downloadFromUrl(url, subtitle);
    }

    async function shared() {
        await sharedFromUrl(url);
    }

    return (
        <Screen>
            <Container>
                <ButtonClose name="close" color={'#FFF'} size={33} onPress={closeModal} />
                <DataTime>{datatime}</DataTime>
                <Image resizeMode="contain" source={{ uri: url }} />

                <BoxButton>
                    <Ionicons
                        name={"download-outline"}
                        size={30}
                        color={'#FFF'}
                        onPress={download}
                    />

                    <Ionicons
                        name="share-social"
                        size={30}
                        color={'#FFF'}
                        onPress={shared}
                    />
                </BoxButton>

            </Container>
        </Screen>
    )
}

const Screen = styled.View`
background-color: rgba(0,0,0, 0.8);
flex: 1;
width: 100%;
justify-content: center;
align-items: center;
`;

const Container = styled.View`
width: 90%;
background-color: #000;
border-radius: 20px;
border-width: 2px;
border-color: #FFF;
`;

const ButtonClose = styled(Ionicons)`
align-self: flex-end;
margin: 5px 5px 0 0;
`;

const DataTime = styled.Text`
color: white;
font-size: 20px;
align-self: center;
`;

const Image = styled.Image`
width: 360px;
height: 360px;
align-self: center;
`;

const BoxButton = styled.View`
flex-direction: row;
justify-content: space-around;
margin-bottom: 10px;
`;
