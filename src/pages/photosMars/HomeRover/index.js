import { useNavigation } from "@react-navigation/native";
import { styled } from "styled-components/native";
import { useMyContext } from "../../../Context/Context";

export default function HomeRover() {

    const navigation = useNavigation();

    const { updateSharedValue } = useMyContext();

    function handleNavigation(rover) {
        navigation.navigate('BottonRoute', { screen: 'PhotosMars', params: { rover: rover } })
        updateSharedValue(rover);
    }

    return (
        <Container>
            <ImageBackground source={require('../../../img/mars.jpg')}>

                <ContainerRover>
                    <Box>
                        <Name>Curiosity</Name>
                        <Photo source={require('../../../img/curiosity.png')} resizeMode="contain" />
                    </Box>
                    <Button onPress={() => handleNavigation('Curiosity')}>
                        <TextButton>Ir</TextButton>
                    </Button>
                </ContainerRover>

                <ContainerRover>
                    <Box>
                        <Name>Opportunity</Name>
                        <Photo source={require('../../../img/opportunity.png')} resizeMode="contain" />
                    </Box>
                    <Button onPress={() => handleNavigation('Opportunity')}>
                        <TextButton>Ir</TextButton>
                    </Button>
                </ContainerRover>

                <ContainerRover>
                    <Box>
                        <Name>Spirit</Name>
                        <Photo source={require('../../../img/spirit.png')} resizeMode="contain" />
                    </Box>
                    <Button onPress={() => handleNavigation('Spirit')}>
                        <TextButton>Ir</TextButton>
                    </Button>
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

const ContainerRover = styled.View`
background-color: rgba(190,190,190,0.5);
margin: 5px;
border-width: 2px;
border-radius: 10px;
flex-direction: row;
flex: 1;
`;

const Box = styled.View`
width: 50%;
align-items: center;
margin-left: 20px;
`;

const Name = styled.Text`
font-size: 20px;
font-weight: bold;
`;

const Button = styled.TouchableOpacity`
background-color: #CD853F;
width: 70px; 
position: absolute;
border-radius: 10px;
border-width: 2.3px;
bottom: 40%;
right: 50px;
`;

const TextButton = styled.Text`
font-size: 18px;
color: #FFF;
text-align: center;
`;

const Photo = styled.Image`
height: 85%;
width: 100%;
`;