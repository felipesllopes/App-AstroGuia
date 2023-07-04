import { useRoute } from "@react-navigation/native";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Planet() {

    const route = useRoute();

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../../img/fundo2.jpg")}>
                <ScrollView>
                    <View style={styles.cardContainer}>
                        <Text style={styles.planetName}>{route.params?.data.nome}</Text>
                        <Image style={styles.planetImage} source={route.params?.data.imagem} resizeMode="contain" />
                    </View>

                    <Text style={styles.generalData}>Dados Gerais:</Text>

                    <Text style={styles.topicText}>Diâmetro equatorial: {route.params?.data.diametro_equatorial}</Text>
                    <Text style={styles.topicText}>Área da superfície: {route.params?.data.area_superficie}</Text>
                    <Text style={styles.topicText}>Massa: {route.params?.data.massa}</Text>
                    <Text style={styles.topicText}>Distância do Sol: {route.params?.data.distancia_sol}</Text>
                    <Text style={styles.topicText}>Satélites naturais: {route.params?.data.satelites_naturais}</Text>
                    <Text style={styles.topicText}>Período de rotação: {route.params?.data.periodo_rotacao}</Text>
                    <Text style={styles.topicText}>Período de translação: {route.params?.data.periodo_translacao}</Text>
                    <Text style={styles.topicText}>Temperatura média: {route.params?.data.temperatura_media}</Text>
                    <Text style={styles.topicText}>Composição atmosférica: {route.params?.data.composicao_atmosferica}</Text>

                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    planetName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    cardContainer: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
        margin: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    planetImage: {
        marginVertical: 5,
    },
    generalData: {
        fontSize: 26,
        color: 'white',
        textAlign: 'center',
        marginBottom: 5,
    },
    topicText: {
        fontSize: 19,
        color: 'white',
        margin: 10,
        backgroundColor: 'rgba(14,14,14, 0.6)',
        borderRadius: 5,
    },
})