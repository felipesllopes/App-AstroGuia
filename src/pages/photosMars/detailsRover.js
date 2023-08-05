import { useRoute } from "@react-navigation/native";
import { Share } from "react-native";
import { styled } from "styled-components/native";

export default function DetailsRover() {

    const route = useRoute();

    async function share() {
        await Share.share({
            message: `Foto rover ${route.params?.data.rover.name} em Marte. \n${route.params?.data.img_src}`
        })
    }

    return (
        <Container>
            <ScrollView>

                <ContainerInfo>
                    <Photo source={{ uri: route.params?.data.img_src }} />
                    <Text>Rover: {route.params?.data.rover.name}</Text>
                    <Text>Câmera: {route.params?.data.camera.full_name} ({route.params?.data.camera.name})</Text>
                    <Text>Id: {route.params?.data.id}</Text>
                    <Text>Dia marciano: {route.params?.data.sol}</Text>
                    <Text>Data terráquea: {route.params?.data.earth_date}</Text>
                    <Text>Data de lançamento: {route.params?.data.rover.launch_date}</Text>
                    <Text>Data de pouso: {route.params?.data.rover.landing_date}</Text>
                    <Text>Status da missão: {route.params?.data.rover.status}</Text>
                </ContainerInfo>

                <BoxButton>
                    <Button onPress={share}>
                        <TextButton>Compartilhar</TextButton>
                    </Button>
                </BoxButton>

            </ScrollView>
        </Container>
    )
}

const Container = styled.SafeAreaView`
background-color: #CD853F;
flex: 1;
`;

const ScrollView = styled.ScrollView``;

const ContainerInfo = styled.View`
border-width: 4px;
border-color: #000;
border-radius: 14px;
align-items: center;
margin: 30px 10px 0 10px;
background-color: #FFF;
`;

const Photo = styled.Image`
width: 100%;
height: 370px;
align-self: center;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`;

const Text = styled.Text`
font-size: 17px;
margin: 0 4px;
text-align: center;
`;

const BoxButton = styled.View`
flex-direction: row;
justify-content: space-around;
margin-top: 20px;
margin-bottom: 5%;
`;

const Button = styled.TouchableOpacity`
background-color: #FFF;
border-width: 2px;
border-color: #555;
border-radius: 5px;
padding: 5px 10px;
`;

const TextButton = styled.Text`
color: #CD853F;
text-align: center;
font-size: 18px;
font-weight: bold;
`;
