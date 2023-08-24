import { useNavigation, useRoute } from "@react-navigation/native";
import { styled } from "styled-components/native";
import ButtonBack from "../../Components/ButtonBack";

export default function Planet() {

    const route = useRoute();
    const navigation = useNavigation();

    return (
        <Container>
            <ImageBackground source={require("../../img/wallpaper2.jpg")}>
                <ButtonBack pag={route.params?.data.nome} />
                <ScrollView>

                    <ImagePlanet source={route.params?.data.imagem} resizeMode="contain" />

                    <TitleData>Dados Gerais:</TitleData>

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

const ScrollView = styled.ScrollView``;

const ImagePlanet = styled.Image`
align-self: center;
margin: 20px 0;
`;

const TitleData = styled.Text`
font-size: 25px;
color: #FFF;
text-align: center;
margin-bottom: 15px;
`;

const Text = styled.Text`
font-size: 17.5px;
color: #FFF;
margin: 0 10px 10px;
background-color: rgba(0,0,0,0.5);
border-radius: 5px;
`;
