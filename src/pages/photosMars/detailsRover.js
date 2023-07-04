import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsRover() {

    const navigation = useNavigation();
    const route = useRoute();

    async function share() {
        await Share.share({
            message: `Foto rover ${route.params?.data.rover.name} em Marte. \n${route.params?.data.img_src}`
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                {/* <Text style={styles.title}>Detalhes Rover</Text> */}
                <View style={styles.box}>
                    <Image style={styles.image} source={{ uri: route.params?.data.img_src }} />
                    <Text style={styles.text}>Rover: {route.params?.data.rover.name}</Text>
                    <Text style={styles.text}>Câmera: {route.params?.data.camera.full_name} ({route.params?.data.camera.name})</Text>
                    <Text style={styles.text}>Id: {route.params?.data.id}</Text>
                    <Text style={styles.text}>Dia marciano: {route.params?.data.sol}</Text>
                    <Text style={styles.text}>Data terráquea: {route.params?.data.earth_date}</Text>
                    <Text style={styles.text}>Data de lançamento: {route.params?.data.rover.launch_date}</Text>
                    <Text style={styles.text}>Data de pouso: {route.params?.data.rover.landing_date}</Text>
                    {route.params?.data.rover.status == "active" ?
                        <Text style={styles.text}>Status da missão: ativa</Text> :
                        <Text style={styles.text}>Status da missão: completa</Text>
                    }
                </View>

                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button} onPress={share}>
                        <Text style={styles.textButton}>Compartilhar</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
                        <Text style={styles.textButton}>Voltar</Text>
                    </TouchableOpacity> */}
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CD853F',
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
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
    },
    button: {
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: '#555',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 30,
    },
    textButton: {
        color: '#CD853F',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
})