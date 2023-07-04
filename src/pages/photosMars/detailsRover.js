import { useRoute } from "@react-navigation/native";
import { Image, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DetailsRover() {

    const route = useRoute();

    async function share() {
        await Share.share({
            message: `Foto rover ${route.params?.data.rover.name} em Marte. \n${route.params?.data.img_src}`
        })
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.box}>
                <Image style={styles.image} source={{ uri: route.params?.data.img_src }} />
                <Text style={styles.text}>Rover: {route.params?.data.rover.name}</Text>
                <Text style={styles.text}>Câmera: {route.params?.data.camera.full_name} ({route.params?.data.camera.name})</Text>
                <Text style={styles.text}>Id: {route.params?.data.id}</Text>
                <Text style={styles.text}>Dia marciano: {route.params?.data.sol}</Text>
                <Text style={styles.text}>Data terráquea: {route.params?.data.earth_date}</Text>
                <Text style={styles.text}>Data de lançamento: {route.params?.data.rover.launch_date}</Text>
                <Text style={styles.text}>Data de pouso: {route.params?.data.rover.landing_date}</Text>
                <Text style={styles.text}>Status da missão: {route.params?.data.rover.status}</Text>
            </View>

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={share}>
                    <Text style={styles.textButton}>Compartilhar</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CD853F',
        flex: 1,
    },
    box: {
        borderWidth: 4,
        borderColor: '#000',
        borderRadius: 14,
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#DDD',
        marginTop: 30,
    },
    image: {
        width: '100%',
        height: 370,
        alignSelf: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text: {
        fontSize: 17,
        marginHorizontal: 4,
        textAlign: 'center',
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: '5%'
    },
    button: {
        backgroundColor: '#FFF',
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