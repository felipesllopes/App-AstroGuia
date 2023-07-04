import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, ImageBackground, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../services/api";
import { key } from "../../services/key";
import ListPhotosMars from "./listPhotosMars";
import roverV from "./rover";

export default function PhotosMars() {

    const navigation = useNavigation();

    const [roverPhotos, setRoverPhotos] = useState([]);
    const [sol, setSol] = useState();
    const [rover, setRover] = useState(0);
    const [camera, setCamera] = useState(0);
    const [result, setResult] = useState("");

    async function search() {

        const response = await api.get(`/mars-photos/api/v1/rovers/${roverV[rover].rover}/photos?sol=${sol}&camera=${roverV[rover].camera[camera]}&api_key=${key}`)
            .then(async (current) => {
                setRoverPhotos(await current.data);

                if (current.data.photos.length == 0) {
                    setResult("Nenhum resultado encontrado")
                }
            })
            .catch((err) => {
                console.log(err)
            })

        Keyboard.dismiss();
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

                <ImageBackground source={require("../../img/marsHeader.jpg")} style={styles.header}>
                    <Text style={styles.title}>Imagens Rovers em Marte</Text>
                </ImageBackground>

                <View style={styles.box}>
                    <Text style={styles.topicText}>Sol marciano (0 a 1004): </Text>
                    <TextInput
                        style={styles.solTextInput}
                        value={sol}
                        onChangeText={(text) => { setSol(text) }}
                        keyboardType="numeric"
                        maxLength={4}
                    />
                </View>

                {sol == undefined || sol == "" || sol > 1004 ? <View></View> :

                    <View>
                        <View style={styles.box}>
                            <Text style={styles.topicText}>Rover: </Text>
                            <Picker
                                style={styles.pickerRover}
                                selectedValue={rover}
                                onValueChange={(item, index) => { setRover(item) }}
                            >
                                {roverV.map((v, k) => {
                                    return <Picker.Item key={k} value={k} label={v.rover} />
                                })}
                            </Picker>
                        </View>

                        <View style={styles.box}>
                            <Text style={styles.topicText}>Câmera: </Text>
                            <Picker
                                style={styles.pickerRover}
                                selectedValue={camera}
                                onValueChange={(item, index) => { setCamera(item) }}
                            >
                                {roverV[rover].camera.map((v, k) => {
                                    return <Picker.Item key={k} value={k} label={v} />
                                })}
                            </Picker>
                        </View>

                        <TouchableOpacity onPress={search} style={styles.searchButton}>
                            <Text style={styles.searchText}>Buscar</Text>
                        </TouchableOpacity>

                        {roverPhotos.photos &&
                            <View>
                                {roverPhotos.photos.length == 0 ? <Text style={styles.notResult}>{result}</Text> :
                                    <View style={styles.viewResult}>
                                        <Text style={styles.result}>Resultados: {roverPhotos.photos.length}</Text>
                                        <FlatList
                                            style={styles.listRover}
                                            data={roverPhotos.photos}
                                            keyExtractor={(item) => String(item.id)}
                                            renderItem={({ item }) => <ListPhotosMars data={item} />}
                                            horizontal={true}
                                        />
                                    </View>
                                }
                            </View>
                        }

                    </View>
                }

                {/* <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
                        <Text style={styles.textButton}>Voltar</Text>
                    </TouchableOpacity>
                </View> */}

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CD853F'
    },
    header: {
        height: 150,
    },
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
        fontWeight: 'bold'
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 6,
        justifyContent: 'flex-end',
        marginRight: 20
    },
    topicText: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    solTextInput: {
        fontSize: 18,
        backgroundColor: 'white',
        width: '15%',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 3,
        paddingVertical: 2
    },
    pickerRover: {
        width: '45%',
        backgroundColor: 'white',
    },
    searchButton: {
        backgroundColor: '#DDD',
        width: 100,
        alignSelf: 'center',
        borderColor: '#555',
        borderWidth: 1.5,
        borderRadius: 18,
        marginVertical: 15,
        paddingVertical: 4,
    },
    searchText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#CD853F',
    },
    notResult: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 107,
        fontWeight: 'bold'
    },
    viewResult: {
        backgroundColor: 'black',
    },
    result: {
        fontSize: 17,
        marginLeft: 3,
        color: 'white',
        marginTop: 3,
    },
    listRover: {
        backgroundColor: '#EEE',
        marginVertical: 5,
        paddingVertical: 2,
    },
    earthDate: {
        fontSize: 17,
        textAlign: 'center',
        marginVertical: 7,
        color: 'white',
    },
    viewButton: {
        alignSelf: 'center',
        alignContent: 'flex-end',
        marginTop: 50,
    },
    button: {
        backgroundColor: '#DDD',
        borderWidth: 2,
        borderColor: '#555',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    textButton: {
        color: '#CD853F',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
})