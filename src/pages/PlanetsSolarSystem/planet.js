import { useRoute } from "@react-navigation/native";
import { styled } from "styled-components/native";
import ButtonBack from "../../Components/ButtonBack";

export default function Planet() {

    const route = useRoute();

    return (
        <Container>
            <ImageBackground source={require("../../img/wallpaper2.jpg")}>
                <ButtonBack pag={route.params?.data.nome} />

                <ImagePlanet source={route.params?.data.imagem} resizeMode="contain" />

                <TitleData>Dados Gerais:</TitleData>

                <ScrollView>
                    <Text>Diâmetro equatorial: {route.params?.data.diametro_equatorial}</Text>
                    <Text>Área da superfície: {route.params?.data.area_superficie}</Text>
                    <Text>Massa: {route.params?.data.massa}</Text>
                    <Text>Distância do Sol: {route.params?.data.distancia_sol}</Text>
                    <Text>Satélites naturais: {route.params?.data.satelites_naturais}</Text>
                    <Text>Período de rotação: {route.params?.data.periodo_rotacao}</Text>
                    <Text>Período de translação: {route.params?.data.periodo_translacao}</Text>
                    <Text>Temperatura média: {route.params?.data.temperatura_media}</Text>
                    <Text>Composição atmosférica: {route.params?.data.composicao_atmosferica}</Text>
                </ScrollView>
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

const ImagePlanet = styled.Image`
align-self: center;
margin: 20px 0;
`;

const TitleData = styled.Text`
font-size: 23px;
color: #FFF;
text-align: center;
padding-bottom: 7px;
font-weight: bold;
`;

const ScrollView = styled.ScrollView`
`;

const Text = styled.Text`
font-size: 17.5px;
color: #FFF;
margin: 6px 10px 0;
padding: 0 4px;
background-color: rgba(0,0,0,0.5);
align-self: flex-start;
border-radius: 4px;
`;
