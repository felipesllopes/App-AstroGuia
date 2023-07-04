import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, ImageBackground, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import api from "../../services/api";
import { key } from "../../services/key";

export default function PhotoSpace() {

    const navigation = useNavigation();
    const [apod, setApod] = useState([]);
    const [loading, setLoading] = useState(true);

    const date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth();
    let ano = date.getFullYear();

    let mees = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let data = `${dia} de ${mees[mes]} de ${ano}`

    useEffect(() => {
        (async () => {
            await api.get(`/planetary/apod?api_key=${key}`)
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
            .catch(() => { Alert('Não foi possível realizar o compartilhamento') })
    }

    function loadImage() {
        setLoading(false);
    }

    return (
        <ImageBackground source={require("../../img/blueSpace.jpg")} style={styles.container}>

            {apod.url == undefined ?

                <Text style={styles.loading}>Carregando...</Text> :

                <ScrollView>
                    <Text style={styles.textData}>{data}</Text>
                    {loading && <ActivityIndicator size={50} color={'red'} style={{ marginVertical: 175 }} />}

                    <View style={{ display: loading ? 'none' : 'flex' }}>
                        <Image
                            style={styles.imageUrl}
                            source={{ uri: apod.url }}
                            resizeMode="stretch"
                            onLoad={loadImage}
                        />
                    </View>

                    <Text style={styles.imageTitle}>{apod.title}</Text>
                    <Text style={styles.creditText}>Crédito da imagem: {apod.copyright}</Text>

                    <TouchableOpacity style={styles.button} onPress={share}>
                        <Text style={styles.textButton}>Compartilhar</Text>
                    </TouchableOpacity>
                </ScrollView>
            }

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        fontSize: 17,
        color: '#FFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
    },
    textData: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
        paddingVertical: 6,
        marginTop: 20,
    },
    imageUrl: {
        width: 405,
        height: 400,
        borderWidth: 1,
        borderColor: '#888',
        marginVertical: 4,
        alignSelf: 'center',
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
    button: {
        backgroundColor: '#000080',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginBottom: '5%',
    },
    textButton: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
    },
})