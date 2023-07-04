import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator, Image, StyleSheet, TouchableOpacity, View } from "react-native";

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
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={handleNavigate}>
                {loading && <ActivityIndicator size={30} color={'#000'} style={{ margin: 86.5 }} />}
                <View style={{ display: loading ? 'none' : 'flex' }}>
                    <Image style={styles.image} source={{ uri: data.img_src }} onLoad={loadImage} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 1,
    },
    image: {
        width: 203,
        height: 203,
    },
})