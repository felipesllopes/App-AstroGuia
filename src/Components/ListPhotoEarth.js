import { styled } from "styled-components/native";
import { key } from "../services/key";
import { Dimensions } from "react-native";

export default function ListPhotoEarth({ item }) {

    let date = item.date;
    let image = item.image;
    let data = `${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8, 10)}`
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth / 2;

    return (
        <Container style={{ width: itemWidth, height: itemWidth }}>

            <Image source={{ uri: `https://api.nasa.gov/EPIC/archive/natural/${data}/png/${image}.png?api_key=${key}` }} />

        </Container>
    )
}

const Container = styled.View`
align-items: center;
`;

const Text = styled.Text`
color: white;
`;

const Image = styled.Image`
width: 98%;
height: 98%;
`;

const Button = styled.Button``;