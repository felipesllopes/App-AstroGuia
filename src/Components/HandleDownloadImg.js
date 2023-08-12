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
            console.log(result)
            await shareAsync(result.uri); // share image
        })
        .catch(() => {
            console.log("Compartilhamento cancelado")
        })
}


export async function downloadFromUrl(url) {

    const { status } = await MediaLibrary.requestPermissionsAsync();

    if (status === 'granted') {
        console.log('Permissão de armazenamento interno concedida.');
    } else {
        console.log('Permissão de armazenamento interno não concedida.');
        return;
    }

    const filename = "minhaImagem.jpg"
    const fileUri = FileSystem.documentDirectory + filename;

    try {
        const downloadObject = FileSystem.createDownloadResumable(url, fileUri);
        const { uri } = await downloadObject.downloadAsync();

        MediaLibrary.saveToLibraryAsync(uri);
        console.log('Imagem salva localmente:', uri);

        const notificationId = await showImageDownloadedNotification();
        console.log('Notificação enviada:', notificationId);

    } catch (error) {
        console.error('Erro ao baixar e salvar a imagem:', error);
    }

}

// Notificação demora a ser gerada

async function showImageDownloadedNotification() {
    const content = {
        title: 'Imagem Baixada!',
        body: 'A imagem foi baixada com sucesso.',
    };

    const trigger = null; // Notificação imediata

    const notificationId = await Notifications.scheduleNotificationAsync({
        content,
        trigger,
    });

    return notificationId;
}