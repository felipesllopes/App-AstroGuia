import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from "expo-media-library";
import * as Notifications from 'expo-notifications';
import { shareAsync } from 'expo-sharing';
import { Alert } from 'react-native';

export async function sharedFromUrl(url) {

    const filename = "fotoAstronomicaDoDia.jpg";
    const result = await FileSystem.downloadAsync(
        url,
        FileSystem.documentDirectory + filename
    );
    console.log(result)

    // compartilhar imagem
    await shareAsync(result.uri);
}



export async function downloadFromUrl(url) {

    const { status } = await MediaLibrary.requestPermissionsAsync();

    Alert.alert('Notificação', 'Download iniciado...')

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

        // const notificationId = await showImageDownloadedNotification();
        // console.log('Notificação enviada:', notificationId);

        Alert.alert('Notificação', 'Download realizado com sucesso!')

    } catch (error) {
        console.error('Erro ao baixar e salvar a imagem:', error);
    }

}

// Notificação demora a ser gerada

// async function showImageDownloadedNotification() {
//     const content = {
//         title: 'Imagem Baixada!',
//         body: 'A imagem foi baixada com sucesso.',
//     };

//     const trigger = null; // Notificação imediata

//     const notificationId = await Notifications.scheduleNotificationAsync({
//         content,
//         trigger,
//     });

//     return notificationId;
// }