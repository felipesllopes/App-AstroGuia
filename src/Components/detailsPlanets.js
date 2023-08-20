import { useNavigation } from "@react-navigation/native";
import { styled } from "styled-components/native";

export default function DetailsPlanets({ data }) {

    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate("Planet", { data: data })
    }

    return (
        <Container>

            <Button activeOpacity={0.6} onPress={handleNavigate}>
                <NamePlanet>{data.nome}</NamePlanet>
                <ImgPlanet source={data.imagem} resizeMode="contain" />
            </Button>

        </Container>
    )
}

const Container = styled.View`
background-color: rgba(0,0,0,0.6);
border-width: 0.4px;
border-color: #FFF;
border-radius: 5px;
margin: 11px 30px;
`;

const Button = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 4px 14px;
`;

const NamePlanet = styled.Text`
font-size: 18px;
color: #FFF;
`;

const ImgPlanet = styled.Image`
width: 40px;
height: 40px;
`;
