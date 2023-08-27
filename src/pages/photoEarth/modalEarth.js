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
        <Container>
            <ButtonClose name="close" color={'#FFF'} size={33} onPress={closeModal} />
            <Image resizeMode="contain" source={{ uri: url }} />
            <DataTime>{datatime}</DataTime>

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
    )
}

const Container = styled.View`
width: 90%;
background-color: #000;
border-radius: 20px;
border-width: 2px;
border-color: #FFF;
`;

const DataTime = styled.Text`
color: white;
font-size: 19px;
position: absolute;
align-self: center;
top: 8%;
`;

const Image = styled.Image`
width: 100%;
height: 80%;
align-self: center;
`;

const ButtonClose = styled(Ionicons)`
align-self: flex-end;
margin: 5px 5px 0 0;
`;

const BoxButton = styled.View`
flex-direction: row;
justify-content: space-around;
bottom: 20px;
`;
