import { useEffect, useState } from "react";
import { styled } from "styled-components/native";
import { Container, Screen, Wallpaper } from "../../../Components/styledBackgroundMars";
import { useMyContext } from "../../../Context/Context";
import api from "../../../services/api";
import { key } from "../../../services/key";

export default function About() {

    const [itens, setItens] = useState();
    const { sharedValue } = useMyContext();

    useEffect(() => {
        (async () => {
            await api.get(`/mars-photos/api/v1/manifests/${sharedValue}?api_key=${key}`)
                .then(async (result) => {
                    setItens(await result.data.photo_manifest)
                })
                .catch(() => {
                    alert("Ocorreu um erro inesperado.");
                })
        })();
    }, [])

    return (
        <Container>
            <Wallpaper source={require('../../../img/martian.png')}>
                <Screen>
                    <Image source={sharedValue == 'Curiosity' ?
                        require('../../../img/curiosity.png') : require('../../../img/spirit.png')} resizeMode="contain"
                    />

                    <Informations>Informações:</Informations>

                    {itens ?
                        <View>
                            <Date>Data de lançamento: {itens && itens.launch_date}</Date>
                            <Date>Data de pouso: {itens && itens.landing_date}</Date>
                            <Date>Última imagem: {itens && itens.max_date}</Date>
                            <Date>Total de fotos: {itens && itens.total_photos}</Date>
                            <Date>Sóis marciano: {itens && itens.max_sol}</Date>
                        </View>
                        :
                        <ActivityIndicator size={30} color={'#FFF'} />
                    }
                </Screen>
            </Wallpaper>
        </Container>

    )
}

const Image = styled.Image`
width: 310px;
height: 310px;
`;

const Informations = styled.Text`
font-size: 22px;
font-weight: bold;
margin-bottom: 15px;
`;

const View = styled.View``;

const ActivityIndicator = styled.ActivityIndicator`
margin-top: 50px;
`;

const Date = styled.Text`
font-size: 19px;
text-align: center;
`;