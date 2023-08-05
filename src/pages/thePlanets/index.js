import { styled } from "styled-components/native";
import DetailsPlanets from "./detailsPlanets";
import planetas from "./planetas";

export default function ThePlanets() {

    return (
        <ImageBackground source={require("../../img/wallpaper2.jpg")}>

            <FlatList
                data={planetas}
                key={item => String(item.id)}
                renderItem={({ item }) => <DetailsPlanets data={item} />}
            />

        </ImageBackground>
    )
}

const ImageBackground = styled.ImageBackground`
flex: 1;
`;

const FlatList = styled.FlatList`
margin-top: 25px;
`;
