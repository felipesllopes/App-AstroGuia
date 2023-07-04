import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, ImageBackground, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../services/api";
import { key } from "../../services/key";

export default function PhotoSpace() {

    const navigation = useNavigation();
    const [apod, setApod] = useState([]);

    const date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth();
    let ano = date.getFullYear();

    let mees = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let data = `${dia} de ${mees[mes]} de ${ano}`

    useEffect(() => {
        (async () => {
            const response = await api.get(`/planetary/apod?api_key=${key}`)
                .then(async (current) => {
                    setApod(await current.data);
                })
                .catch((err) => {
                    console.log(err)
                })
        })()
    }, [])

    async function share() {
        await Share.share({
            message: `Imagem astronômica do dia: ${apod.title} \n${apod.url}`
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../../img/blueSpace.jpg")} style={styles.background}>

                {apod.url == null || apod.url == undefined ?
                    <Text style={styles.loading}>Carregando...</Text> :
                    <ScrollView style={styles.container}>
                        <View>
                            <Text style={styles.textTitle}>Foto Astronômica do dia</Text>
                            <Text style={styles.textData}>{data}</Text>
                            <Image style={styles.imageUrl} source={{ uri: apod.url }} />
                            <Text style={styles.imageTitle}>{apod.title}</Text>
                            <Text style={styles.creditText}>Crédito da imagem: {apod.copyright}</Text>

                            <View style={styles.viewButtons}>
                                <TouchableOpacity style={styles.button} onPress={share}>
                                    <Text style={styles.textButton}>Compartilhar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
                                    <Text style={styles.textButton}>Voltar</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                }

            </ImageBackground>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        alignItems: 'center',
    },
    loading: {
        fontSize: 17,
        color: '#FFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
    },
    textTitle: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 27,
        marginBottom: 17,
        fontWeight: 'bold'
    },
    textData: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
        paddingVertical: 6,
    },
    imageUrl: {
        width: 405,
        height: 390,
        borderWidth: 1,
        borderColor: '#888',
        marginVertical: 4,
    },
    imageTitle: {
        color: '#FFF',
        textAlign: 'center',
        paddingBottom: 16,
        fontSize: 20,
    },
    creditText: {
        color: '#FFF',
        marginTop: 2,
        textAlign: 'center',
        marginBottom: 10,
    },
    viewButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    button: {
        backgroundColor: '#000080',
        borderWidth: 0.6,
        borderColor: '#FFF',
        borderRadius: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    textButton: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
    },
})