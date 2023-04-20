import { useNavigation } from "@react-navigation/native";
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailsPlanets from "./detailsPlanets";
import planetas from "./planetas";

export default function ThePlanets() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../../img/fundo2.jpg")} style={styles.imageBackground}>

                <Text style={styles.title}>Planetas do Sistema Solar</Text>

                <FlatList
                    data={planetas}
                    key={item => String(item.id)}
                    renderItem={({ item }) => <DetailsPlanets data={item} />}
                />

                <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
                    <Text style={styles.backText}>Voltar</Text>
                </TouchableOpacity>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        height: '100%'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        marginVertical: 25,
    },
    backButton: {
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 18,
        marginBottom: 30
    },
    backText: {
        fontSize: 22,
        paddingHorizontal: 10,
        paddingVertical: 2,
        color: 'white',
        textAlign: 'center',
    },
})