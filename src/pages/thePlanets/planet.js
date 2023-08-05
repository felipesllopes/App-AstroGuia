import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Planet() {

    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.data.nome
        })
    }, [navigation])

    return (
        <ImageBackground style={styles.flex} source={require("../../img/wallpaper2.jpg")}>
            <ScrollView>
                <View style={styles.cardContainer}>
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
                <Text style={[styles.topicText, { marginBottom: '5%' }]}>Composição atmosférica: {route.params?.data.composicao_atmosferica}</Text>

            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center'
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
        backgroundColor: 'rgba(0,0,0, 0.5)',
        borderRadius: 5,
    },
})