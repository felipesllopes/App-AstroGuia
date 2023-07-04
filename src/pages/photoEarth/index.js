import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import api from "../../services/api";
import { key } from "../../services/key";

export default function PhotoEarth() {

    const [epic, setEpic] = useState([]);
    const [select, setSelect] = useState(0);
    const [loading, setLoading] = useState(true);
    let epicItem = 0;

    useEffect(() => {
        (async () => {
            await api.get(`/EPIC/api/natural?api_key=${key}`)
                .then(async (current) => {
                    setEpic(await current.data);
                })
                .catch((err) => {
                    alert("Ocorreu um erro inesperado.")
                })
        })()
        setLoading(true);
    }, [select])

    async function share() {
        await Share.share({
            message: `Foto da Terra: \nhttps://api.nasa.gov/EPIC/archive/natural/${epic[select].date.substring(0, 4)}/${epic[select].date.substring(5, 7)}/${epic[select].date.substring(8, 10)}/png/${epic[select].image}.png?api_key=${key}`
        })
            .catch(() => { alert("Ocorreu um erro inesperado.") })
    }

    function loadImage() {
        setLoading(false);
    }

    return (
        <View style={styles.container}>

            {epic[select] == undefined ?
                <Text style={styles.loading}>Carregando...</Text>
                :
                <ScrollView>
                    <Text style={styles.description}>Estas imagens foram tiradas pela câmera EPIC da NASA a bordo do satélite NOAA DSCOVR</Text>

                    <View style={styles.viewPicker}>
                        <Picker
                            selectedValue={select}
                            onValueChange={(item, indexItem) => { setSelect(item) }}
                        >
                            {epicItem = epic.map((v, k) => {
                                return <Picker.Item key={k} value={k} label={v.date} />
                            })}
                        </Picker>
                    </View>

                    {loading && <ActivityIndicator size={50} color={'red'} style={{ marginVertical: 200 }} />}

                    <View style={{ display: loading ? 'none' : 'flex' }}>
                        < Image style={styles.image}
                            source={{ uri: `https://api.nasa.gov/EPIC/archive/natural/${epic[select].date.substring(0, 4)}/${epic[select].date.substring(5, 7)}/${epic[select].date.substring(8, 10)}/png/${epic[select].image}.png?api_key=${key}` }}
                            onLoad={loadImage}
                        />

                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={styles.button} onPress={share}>
                                <Text style={styles.textButton}>Compartilhar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    loading: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
    },
    description: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
        marginBottom: 8,
        marginHorizontal: 10,
        marginTop: 15,
    },
    viewPicker: {
        alignSelf: 'center',
        backgroundColor: '#FFF',
        marginTop: 20,
        width: '60%',
        height: 45,
        justifyContent: 'center',
        borderRadius: 8,
    },
    image: {
        height: 450,
        width: 450,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#000080',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: '5%'
    },
    textButton: {
        fontSize: 18,
        color: 'white',
    },
})
