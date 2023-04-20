import { useNavigation } from "@react-navigation/native";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={require('../img/blueSpace.jpg')}>

                <Text style={styles.appTitle}>TheUniverse</Text>
                <Image source={require("../img/telescopio01.png")} style={styles.imageLogo} />
                <Text style={styles.description}>App com serviços da NASA</Text>

                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('ThePlanets')}>
                    <Text style={styles.textButton}>Planetas do Sistema Solar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('PhotoSpace')}>
                    <Text style={styles.textButton}>Foto Astronômica do dia</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('PhotosMars')}>
                    <Text style={styles.textButton}>Imagens Rovers em Marte</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('PhotoEarth')}>
                    <Text style={styles.textButton}>Foto policromática da Terra</Text>
                </TouchableOpacity>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        height: '100%'
    },
    imageLogo: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 10,
    },
    appTitle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        marginTop: 40,
    },
    description: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 40,
    },
    menuButton: {
        backgroundColor: 'black',
        margin: 10,
        width: '66%',
        height: '5.2%',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: 'white',
        borderRadius: 15,
    },
    textButton: {
        fontSize: 19,
        color: 'white',
        textAlign: 'center',
        marginVertical: 4,
    }
})