import { Dimensions } from "react-native";
import { styled } from "styled-components/native";
import { key } from "../services/key";
import { useState } from "react";

export default function ListPhotoEarth({ item }) {

    const [loading, setLoading] = useState(true);
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth / 2;
    let date = item.date;
    let image = item.image;
    let data = `${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8, 10)}`;
    let time = `${date.substring(11, 16)}`;

    function load() {
        setLoading(false);
    }

    return (
        <Container style={{ width: itemWidth, height: itemWidth }}>

            {loading && <Loading size={30} />}

            <Image
                style={{ display: loading ? 'none' : 'flex' }}
                onLoad={load}
                source={{ uri: `https://api.nasa.gov/EPIC/archive/natural/${data}/png/${image}.png?api_key=${key}` }}
            />
            <Text>{time}</Text>

        </Container>
    )
}

const Container = styled.View`
align-items: center;
`;

const Loading = styled.ActivityIndicator`
position: absolute;
bottom: 50%;
`;

const Image = styled.Image`
width: 98%;
height: 98%;
border-radius: 10px;
`;

const Text = styled.Text`
color: white;
position: absolute;
bottom: 5px;
`;