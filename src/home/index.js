import { useNavigation } from "@react-navigation/native";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={require('../img/blueSpace.jpg')}>

                <Image source={require("../img/logo.png")} style={styles.imageLogo} resizeMode="contain" />

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
    imageLogo: {
        height: 186,
        width: 306,
        marginTop: 40,
        marginBottom: 70,
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