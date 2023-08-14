import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from "expo-media-library";
import * as Notifications from 'expo-notifications';
import { shareAsync } from 'expo-sharing';

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
            alert("Permissão de armazenamento interno não concedida.");
            return;
        }

    } catch (error) {
        alert("Ocorreu um erro ao solicitar permissões.");
    }

    const filename = "minhaImagem.jpg"
    const fileUri = FileSystem.documentDirectory + filename;

    try {
        const downloadObject = FileSystem.createDownloadResumable(url, fileUri);
        const { uri } = await downloadObject.downloadAsync();

        MediaLibrary.saveToLibraryAsync(uri);

        await showImageDownloadedNotification();

    } catch (error) {
        alert("Erro ao baixar e salvar a imagem.");
    }

}

// Notificação demora a ser gerada
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