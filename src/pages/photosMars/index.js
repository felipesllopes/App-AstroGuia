import { useNavigation } from "@react-navigation/native";
import { styled } from "styled-components/native";
import ButtonBack from "../../Components/ButtonBack";
import { useMyContext } from "../../Context/Context";

export default function MarsRoverPhotos() {

    const navigation = useNavigation();

    const { updateSharedValue } = useMyContext();

    function handleNavigation(rover) {
        navigation.navigate('BottonRoute', { screen: 'PhotosMars', params: { rover: rover } })
        updateSharedValue(rover);
    }

    return (
        <Container>
            <ImageBackground source={require('../../img/mars.jpg')}>

                <ButtonBack pag={"Imagens Rovers em Marte"} />

                <ContainerRover onPress={() => handleNavigation('Curiosity')} activeOpacity={0.85}>
                    <Name>Curiosity</Name>
                    <Photo source={require('../../img/curiosity.png')} resizeMode="contain" />
                </ContainerRover>

                <ContainerRover onPress={() => handleNavigation('Opportunity')} activeOpacity={0.85}>
                    <Name>Opportunity</Name>
                    <Photo source={require('../../img/opportunity.png')} resizeMode="contain" />
                </ContainerRover>

                <ContainerRover onPress={() => handleNavigation('Spirit')} activeOpacity={0.85}>
                    <Name>Spirit</Name>
                    <Photo source={require('../../img/spirit.png')} resizeMode="contain" />
                </ContainerRover>

            </ImageBackground>
        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
`;

const ImageBackground = styled.ImageBackground`
flex: 1;
`;

const ContainerRover = styled.TouchableOpacity`
background-color: rgba(190,190,190,0.5);
margin: 5px;
border-width: 2px;
border-radius: 10px;
flex-direction: row;
flex: 1;
align-items: center;
justify-content: space-around;
`;

const Name = styled.Text`
font-size: 22px;
font-weight: bold;
`;


const Photo = styled.Image`
height: 100%;
width: 50%;
`;