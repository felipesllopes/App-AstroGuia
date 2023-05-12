import { useNavigation } from "@react-navigation/native";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackHandler } from "react-native";

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

                <TouchableOpacity style={styles.backButton} onPress={() => BackHandler.exitApp()}>
                    <Text style={styles.textButton}>Sair</Text>
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
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    imageLogo: {
        height: 80,
        width: 80,
        marginTop: 10,
    },
    appTitle: {
        fontSize: 36,
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
        width: '70%',
        height: '6%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 19,
        color: 'white',
        textAlign: 'center',
        marginVertical: 4,
    },
    backButton: {
        backgroundColor: 'black',
        width: '20%',
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 70,
    },
})