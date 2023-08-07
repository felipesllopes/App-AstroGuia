import { styled } from "styled-components/native";

export default function About() {
    return (
        <Container>
            <Title>Sobre</Title>
        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
`;

const Title = styled.Text`
font-size: 18px;
`;