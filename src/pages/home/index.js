import { useNavigation } from "@react-navigation/native";
import { styled } from "styled-components/native";

export default function Home() {

    const navigation = useNavigation();

    return (
        <Container>
            <Wallpaper source={require('../../img/wallpaper1.jpg')}>

                <Logo source={require("../../img/logo.png")} resizeMode="contain" />

                <Button activeOpacity={0.6} onPress={() => navigation.navigate('PlanetsSolarSystem')}>
                    <TextButton>Planetas do Sistema Solar</TextButton>
                </Button>

                <Button activeOpacity={0.6} onPress={() => navigation.navigate('AstronomicalPhoto')}>
                    <TextButton>Foto Astronômica do dia</TextButton>
                </Button>

                <Button activeOpacity={0.6} onPress={() => navigation.navigate('MarsRoverPhotos')}>
                    <TextButton>Imagens Rovers em Marte</TextButton>
                </Button>

                <Button activeOpacity={0.6} onPress={() => navigation.navigate('EarthPolychromaticPhoto')}>
                    <TextButton>Foto policromática da Terra</TextButton>
                </Button>

            </Wallpaper>
        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
`

const Wallpaper = styled.ImageBackground`
height: 100%;
width: 100%;
align-items: center;
`

const Logo = styled.Image`
height: 87px;
width: 290px;
margin-top: 60px;
margin-bottom: 90px;
`

const Button = styled.TouchableOpacity`
background-color: rgba(0,0,60,0.7);
margin: 10px;
width: 70%;
height: 6%;
border-width: 1px;
border-color: #FFF;
border-radius: 15px;
justify-content: center;
`

const TextButton = styled.Text`
font-size: 19px;
color: #FFF;
text-align: center;
margin: 4px 0;
`