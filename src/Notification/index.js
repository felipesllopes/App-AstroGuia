import * as Notifications from 'expo-notifications';
import { useEffect, useRef } from 'react';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default function App() {
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

}

export async function schedulePushNotification(subtitle) {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Download concluído",
            body: `${subtitle}`,
            data: { data: 'goes here' },
        },
        trigger: { seconds: 2 },
    });
}
