import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { styled } from "styled-components/native";

export default function ListPhotosMars({ data }) {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

    function handleNavigate() {
        navigation.navigate("DetailsRover", { data: data })
    }

    function loadImage() {
        setLoading(false);
    }

    return (
        <Container>
            <TouchableOpacity activeOpacity={0.8} onPress={handleNavigate}>
                {loading && <ActivityIndicator size={30} color={'#000'} />}
                <View style={{ display: loading ? 'none' : 'flex' }}>
                    <Photo source={{ uri: data.img_src }} onLoad={loadImage} />
                </View>
            </TouchableOpacity>
        </Container>
    )
}

const Container = styled.View`
margin: 0 1px;
`;

const Photo = styled.Image`
width: 150px;
height: 150px;
`;

const ActivityIndicator = styled.ActivityIndicator`
margin: 60px;
`;

const View = styled.View``;
const TouchableOpacity = styled.TouchableOpacity``;