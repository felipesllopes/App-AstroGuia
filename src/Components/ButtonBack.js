import { styled } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ButtonBack({ pag }) {

    const navigation = useNavigation();

    return (
        <Container>
            <Button name="arrow-back" size={26} color={'#FFF'} onPress={() => navigation.goBack()} />
            <Pag>{pag}</Pag>
        </Container>
    )

}

const Container = styled.View`
flex-direction: row;
align-items: center;
margin: 10px 0 10px 15px;
`;

const Button = styled(Ionicons)`

`;

const Pag = styled.Text`
font-size: 23px;
color: #FFF;
margin-left: 20px;
`;