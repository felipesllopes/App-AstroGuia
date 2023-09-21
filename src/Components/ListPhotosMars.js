import { useState } from "react";
import { Dimensions, Modal } from "react-native";
import { styled } from "styled-components/native";
import ModalMars from "../pages/MarsRoverPhotos/Photos/ModalMars";

export default function ListPhotosMars({ data }) {

    const [loading, setLoading] = useState(true);
    const [visibleModal, setVisibleModal] = useState(false);
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth / 3.1;

    function loadImage() {
        setLoading(false);
    }

    function handleVisibleModal(visible) {
        setVisibleModal(visible);
    }

    return (
        <Container style={{ width: itemWidth, height: itemWidth }}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => handleVisibleModal(true)}>
                {loading && <ActivityIndicator size={30} color={'#000'} />}
                <View style={{ display: loading ? 'none' : 'flex' }}>
                    <Photo source={{ uri: data.img_src }} onLoad={loadImage} />
                </View>
            </TouchableOpacity>

            <Modal visible={visibleModal} transparent={true} animationType="fade">
                <ModalMars
                    data={data}
                    visible={() => handleVisibleModal(false)}
                />
            </Modal>

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