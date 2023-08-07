import { styled } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

export default function HomeRover() {

    const navigation = useNavigation();

    function handleNavigation(rover) {
        navigation.navigate('PhotosMars', { rover: rover })
    }

    return (
        <Container>
            <ImageBackground source={require('../../../img/mars.jpg')}>

                <Title>Escolha o Rover:</Title>

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

const Title = styled.Text`
font-size: 22px;
color: #FFF;
font-weight: bold;
text-align: center;
margin: 10px;
`;

const ContainerRover = styled.View`
background-color: rgba(190,190,190,0.5);
margin: 5px;
border-width: 2px;
border-radius: 10px;
flex-direction: row;
`;

const Box = styled.View`
width: 40%;
align-items: center;
`;

const Name = styled.Text`
font-size: 18px;
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
height: 120px;
width: 120px;
`;