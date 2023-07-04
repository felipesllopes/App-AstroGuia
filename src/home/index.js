import { useNavigation } from "@react-navigation/native";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={require('../img/blueSpace.jpg')}>

                <Text style={styles.appTitle}>TheUniverse</Text>
                <Image source={require("../img/telescopio01.png")} style={styles.imageLogo} />
                <Text style={styles.description}>App com serviços da NASA</Text>

                <TouchableOpacity activeOpacity={0.6} style={styles.menuButton} onPress={() => navigation.navigate('ThePlanets')}>
                    <Text style={styles.textButton}>Planetas do Sistema Solar</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6} style={styles.menuButton} onPress={() => navigation.navigate('PhotoSpace')}>
                    <Text style={styles.textButton}>Foto Astronômica do dia</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6} style={styles.menuButton} onPress={() => navigation.navigate('PhotosMars')}>
                    <Text style={styles.textButton}>Imagens Rovers em Marte</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6} style={styles.menuButton} onPress={() => navigation.navigate('PhotoEarth')}>
                    <Text style={styles.textButton}>Foto policromática da Terra</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>
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
    appTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 50,
        marginBottom: 20,
    },
    imageLogo: {
        height: 80,
        width: 80,
        marginTop: 10,
    },
    description: {
        color: '#FFF',
        textAlign: 'center',
        marginVertical: 40,
    },
    menuButton: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin: 10,
        width: '70%',
        height: '6%',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 15,
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 19,
        color: '#FFF',
        textAlign: 'center',
        marginVertical: 4,
    },

})