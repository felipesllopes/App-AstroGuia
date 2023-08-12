import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions } from "react-native";
import { styled } from "styled-components/native";

export default function ListPhotosMars({ data }) {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth / 3.1;

    function handleNavigate() {
        navigation.navigate("DetailsPhoto", { data: data })
    }

    function loadImage() {
        setLoading(false);
    }

    return (
        <Container style={{ width: itemWidth, height: itemWidth }}>
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
margin: 1.5px;
`;

const Photo = styled.Image`
width: 100%;
height: 100%;
border-radius: 4px;
`;

const ActivityIndicator = styled.ActivityIndicator`
margin: 60px;
`;

const View = styled.View``;
const TouchableOpacity = styled.TouchableOpacity``;