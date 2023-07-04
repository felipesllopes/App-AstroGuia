import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../services/api";
import { key } from "../../services/key";

export default function PhotoEarth() {

    const navigation = useNavigation();

    const [epic, setEpic] = useState([]);
    const [select, setSelect] = useState(0);
    let epicItem = 0;

    useEffect(() => {
        (async () => {
            const response = await api.get(`/EPIC/api/natural?api_key=${key}`)
                .then(async (current) => {
                    setEpic(await current.data);
                })
                .catch((err) => {
                    console.log(err)
                })
        })()
    }, [])

    async function share() {
        await Share.share({
            message: `Foto da Terra: \nhttps://api.nasa.gov/EPIC/archive/natural/${epic[select].date.substring(0, 4)}/${epic[select].date.substring(5, 7)}/${epic[select].date.substring(8, 10)}/png/${epic[select].image}.png?api_key=${key}`
        })
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.background}>

                {epic[select] == null || epic[select] == undefined ?
                    <Text style={styles.loading}>Carregando...</Text>
                    :
                    <View>
                        <ScrollView>
                            <Text style={styles.title}>Foto policromática da Terra</Text>
                            <Text style={styles.description}>Estas imagens foram tiradas pela câmera EPIC da NASA a bordo do satélite NOAA DSCOVR</Text>

                            <Picker
                                style={styles.picker}
                                selectedValue={select}
                                onValueChange={(item, indexItem) => { setSelect(item) }}
                            >
                                {epicItem = epic.map((v, k) => {
                                    return <Picker.Item key={k} value={k} label={v.date} />
                                })}
                            </Picker>

                            < Image style={styles.image}
                                source={{ uri: `https://api.nasa.gov/EPIC/archive/natural/${epic[select].date.substring(0, 4)}/${epic[select].date.substring(5, 7)}/${epic[select].date.substring(8, 10)}/png/${epic[select].image}.png?api_key=${key}` }}
                            />

                            <View style={styles.viewButtons}>
                                <TouchableOpacity style={styles.button} onPress={share}>
                                    <Text style={styles.textButton}>Compartilhar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
                                    <Text style={styles.textButton}>Voltar</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                }

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    loading: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#000080',
        paddingVertical: 15,
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 10,
    },
    description: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginBottom: 8,
        marginHorizontal: 10,
        marginTop: 10
    },
    picker: {
        color: 'black',
        backgroundColor: 'white',
        marginTop: 20,
        width: '60%',
        alignSelf: 'center',
    },
    image: {
        height: 450,
        width: 450,
        alignSelf: 'center',
    },
    viewButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 50
    },
    button: {
        backgroundColor: '#000080',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 6,
        borderWidth: 0.6,
        borderColor: 'white'
    },
    textButton: {
        fontSize: 18,
        color: 'white',
    },
})
