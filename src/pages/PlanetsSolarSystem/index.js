import { styled } from "styled-components/native";
import ButtonBack from "../../Components/ButtonBack";
import DetailsPlanets from "../../Components/DetailsPlanets";
import planetas from "../../Components/planetas";

export default function PlanetsSolarSystem() {

    return (
        <ImageBackground source={require("../../img/wallpaper2.jpg")}>

            <ButtonBack pag={"Planetas do Sistema Solar"} />

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
