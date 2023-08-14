import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from "expo-media-library";
import * as Notifications from 'expo-notifications';
import { shareAsync } from 'expo-sharing';
import { Alert } from 'react-native';

// Acões estão demorando a serem realizadas.
export async function sharedFromUrl(url) {

    const filename = "fotoAstronomicaDoDia.jpg";
    await FileSystem.downloadAsync(
        url,
        FileSystem.documentDirectory + filename
    )
        .then(async (result) => {
            await shareAsync(result.uri); // share image
        })
}


export async function downloadFromUrl(url) {

    try {
        const { status } = await MediaLibrary.requestPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert("Permissão não concedida", "Permissão de armazenamento interno não concedida.");
            return;
        }

    } catch (error) {
        Alert.alert("Erro", "Ocorreu um erro ao solicitar permissões.");
    }

    const filename = "minhaImagem.jpg"
    const fileUri = FileSystem.documentDirectory + filename;

    try {
        const downloadObject = FileSystem.createDownloadResumable(url, fileUri);
        const { uri } = await downloadObject.downloadAsync();

        MediaLibrary.saveToLibraryAsync(uri);

        await showImageDownloadedNotification();

    } catch (error) {
        Alert.alert("Erro","Erro ao baixar e salvar a imagem.");
    }

}

async function showImageDownloadedNotification() {
    const content = {
        title: 'Download concluido.',
        body: 'A imagem foi baixada com sucesso.',
    };

    const trigger = null; // Notificação imediata

    const notificationId = await Notifications.scheduleNotificationAsync({
        content,
        trigger,
    });

    return notificationId;
}