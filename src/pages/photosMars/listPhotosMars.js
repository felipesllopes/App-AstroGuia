import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ListPhotosMars({ data }) {

    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate("DetailsRover", { data: data })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={handleNavigate}>
                <Image style={styles.image} source={{ uri: data.img_src }} />
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