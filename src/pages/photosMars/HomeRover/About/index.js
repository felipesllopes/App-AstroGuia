import { useEffect, useState } from "react";
import { styled } from "styled-components/native";
import { useMyContext } from "../../../../Context/Context";
import api from "../../../../services/api";
import { key } from "../../../../services/key";
import { View } from "react-native";

export default function About() {

    const [itens, setItens] = useState();
    const { sharedValue } = useMyContext();

    useEffect(() => {
        (async () => {
            await api.get(`/mars-photos/api/v1/manifests/${sharedValue}?api_key=${key}`)
                .then(async (result) => {
                    setItens(await result.data.photo_manifest)
                })
                .catch((e) => {
                    console.log(e)
                })
        })();
        console.log(itens)
    }, [])

    return (
        <Container>

            <Image source={sharedValue == 'Curiosity' ?
                require('../../../../img/curiosity.png') : require('../../../../img/spirit.png')} resizeMode="contain"
            />

            {itens &&
                <View>
                    <Date>Data de lançamento: {itens && itens.launch_date}</Date>
                    <Date>Data de pouso: {itens && itens.landing_date}</Date>
                    <Date>Última imagem: {itens && itens.max_date}</Date>
                    <Date>Total de fotos: {itens && itens.total_photos}</Date>
                    <Date>Sóis marciano: {itens && itens.max_sol}</Date>
                </View>
            }

        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
`;

const Image = styled.Image`
width: 300px;
height: 300px;
`;

const Date = styled.Text`
font-size: 19px;
text-align: center;
`;