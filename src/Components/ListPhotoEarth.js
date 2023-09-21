import { useState } from "react";
import { Dimensions, Modal } from "react-native";
import { styled } from "styled-components/native";
import ModalEarth from "../pages/EarthPolychromaticPhoto/modalEarth";
import { key } from "../services/key";

export default function ListPhotoEarth({ item }) {

    const [loading, setLoading] = useState(true);
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth / 2;
    const [modalVisible, setModalVisible] = useState(false);
    let date = item.date;
    let image = item.image;
    let data = `${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8, 10)}`;
    let time = `${date.substring(11, 16)}`;
    let url = `https://api.nasa.gov/EPIC/archive/natural/${data}/png/${image}.png?api_key=${key}`;

    function load() {
        setLoading(false);
    }

    function openModal(visible) {
        setModalVisible(visible);
    }


    return (
        <Container
            style={{ width: itemWidth, height: itemWidth }}
            activeOpacity={0.7}
            onPress={() => openModal(true)}
        >

            {loading && <Loading size={30} />}

            <Image
                style={{ display: loading ? 'none' : 'flex' }}
                onLoad={load}
                source={{ uri: url }}
            />

            <Modal transparent={true} visible={modalVisible} animationType="fade">
                <ModalEarth
                    closeModal={() => openModal(false)}
                    url={url}
                    datatime={`${data} - ${time}`}
                />
            </Modal>

        </Container>
    )
}

const Container = styled.TouchableOpacity`
align-items: center;
`;

const Loading = styled.ActivityIndicator`
position: absolute;
bottom: 50%;
`;

const Image = styled.Image`
width: 98%;
height: 98%;
border-radius: 10px;
`;
