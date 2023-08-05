import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { styled } from "styled-components/native";

export default function Planet() {

    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.data.nome
        })
    }, [navigation])

    return (
        <Container>
            <ImageBackground source={require("../../img/wallpaper2.jpg")}>
                <ScrollView>
                    <ImageView>
                        <ImagePlanet source={route.params?.data.imagem} resizeMode="contain" />
                    </ImageView>

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

const ImageView = styled.View`
align-items: center;
border-width: 1px;
border-color: #FFF;
margin: 10px;
border-radius: 10px;
justify-content: center;
padding: 10px;
`;

const ImagePlanet = styled.Image``;

const TitleData = styled.Text`
font-size: 25px;
color: #FFF;
text-align: center;
margin-bottom: 5px;
`;

const Text = styled.Text`
font-size: 17px;
color: #FFF;
margin: 10px;
background-color: rgba(0,0,0,0.5);
border-radius: 5px;
`;
