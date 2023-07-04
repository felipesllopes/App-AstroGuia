import { FlatList, ImageBackground, StyleSheet } from "react-native";
import DetailsPlanets from "./detailsPlanets";
import planetas from "./planetas";

export default function ThePlanets() {

    return (
        <ImageBackground source={require("../../img/fundo2.jpg")} style={styles.container}>

            <FlatList
                style={{ marginTop: 25 }}
                data={planetas}
                key={item => String(item.id)}
                renderItem={({ item }) => <DetailsPlanets data={item} />}
            />

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})