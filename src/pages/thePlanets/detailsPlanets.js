import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

export default function DetailsPlanets({ data }) {

    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate("Planet", { data: data })
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleNavigate}>
                <Text style={styles.textName}>{data.nome}</Text>
                <Image style={styles.image} source={data.imagem} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        margin: 13,
        borderWidth: 0.3,
        borderColor: 'white',
        borderRadius: 5,
        marginHorizontal: 30,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 14,
        marginVertical: 4,
    },
    textName: {
        fontSize: 18,
        color: 'white',
    },
    image: {
        width: 40,
        height: 40,
    }
})