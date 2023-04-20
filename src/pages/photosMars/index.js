import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, ImageBackground, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../services/api";
import { key } from "../../services/key";
import ListPhotosMars from "./listPhotosMars";

export default function PhotosMars() {

    const [roverPhotos, setRoverPhotos] = useState([]); // recebe a API
    const [sol, setSol] = useState();  // recebe o dia marcianico através do input
    const [rover, setRover] = useState("Curiosity"); // recebe o rover através do picker 1
    const [cam, setCam] = useState([]); // receb array adc as cameras conforme rover slcd e listará no picker 2
    const [camera, setCamera] = useState("FHAZ");  // recebe a camera através do picker 2

    // valores que serão enviados para a API após o botão de busca for clicado
    const [searchSol, setSearchSol] = useState(null);
    const [searchRover, setSearchRover] = useState(null);
    const [searchCamera, setSearchCamera] = useState(null);

    const navigation = useNavigation();

    useEffect(() => {
        if (searchSol != "" && searchSol != undefined) { // só irá executar a função async se o state tiver algum valor. Se um state tiver valor, então todos têm

            (async () => {
                const response = await api.get(`/mars-photos/api/v1/rovers/${searchRover}/photos?sol=${searchSol}&camera=${searchCamera}&api_key=${key}`);
                setRoverPhotos(await response.data);
            })();
        }

        if (rover == "Curiosity") {
            setCam(["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"]);
        }
        if (rover == "Opportunity" || rover == "Spirit") {
            setCam(["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"]);
        }

    }, [searchRover, searchCamera, searchSol])

    function search() {
        setSearchSol(sol);
        setSearchRover(rover);
        setSearchCamera(camera);
        Keyboard.dismiss();
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

                <ImageBackground source={require("../../img/marsHeader.jpg")} style={styles.header}>
                    <Text style={styles.title}>Imagens Rovers em Marte</Text>
                </ImageBackground>

                <View style={styles.box}>
                    <Text style={styles.topicText}>Sol marciano (0 a 1000): </Text>
                    <TextInput
                        style={styles.solTextInput}
                        value={sol}
                        onChangeText={(text) => { setSol(text) }}
                        keyboardType="numeric"
                        maxLength={4}
                    />
                </View>

                {sol == undefined || sol == "" || sol > 1000 ? <View></View> :

                    <View>
                        <View style={styles.box}>
                            <Text style={styles.topicText}>Rover: </Text>
                            <Picker
                                style={styles.pickerRover}
                                selectedValue={rover}
                                onValueChange={(item, index) => { setRover(item) }}
                            >
                                <Picker.Item key={1} value="Curiosity" label="Curiosity" />
                                <Picker.Item key={2} value="Opportunity" label="Opportunity" />
                                <Picker.Item key={3} value="Spirit" label="Spirit" />
                            </Picker>
                        </View>

                        <View style={styles.box}>
                            <Text style={styles.topicText}>Câmera: </Text>
                            <Picker
                                style={styles.pickerRover}
                                selectedValue={camera}
                                onValueChange={(item, index) => { setCamera(item) }}
                            >
                                {cam.map((v, k) => {
                                    return <Picker.Item key={k} value={v} label={v} />
                                })}
                            </Picker>
                        </View>

                        <TouchableOpacity onPress={search} style={styles.searchButton}>
                            <Text style={styles.searchText}>Buscar</Text>
                        </TouchableOpacity>

                        {roverPhotos.photos == undefined ?
                            <View></View>
                            :
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

                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
                        <Text style={styles.textButton}>Voltar</Text>
                    </TouchableOpacity>
                </View>

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
        marginBottom: 40
    },
    textButton: {
        color: '#CD853F',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
})