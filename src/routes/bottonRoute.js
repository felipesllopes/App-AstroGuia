import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from "../pages/MarsRoverPhotos/About";
import PhotosMars from '../pages/MarsRoverPhotos/Photos';
import Saved from '../pages/MarsRoverPhotos/Saved';

export default function BottonRoute() {

    const Botton = createBottomTabNavigator();

    return (
        <Botton.Navigator
            screenOptions={{
                tabBarStyle: { borderTopWidth: 0 },
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#999',
                tabBarLabelStyle: { fontSize: 11, fontWeight: "bold" }
            }}
        >

            <Botton.Screen
                name='PhotosMars'
                component={PhotosMars}
                options={{
                    headerShown: false,
                    title: 'Fotos',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='camera' color={color} size={30} />
                    )
                }}
            />

            <Botton.Screen
                name='About'
                component={About}
                options={{
                    headerShown: false,
                    title: 'Sobre',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='information-circle' color={color} size={30} />
                    )
                }}
            />

            <Botton.Screen
                name='Saved'
                component={Saved}
                options={{
                    headerShown: false,
                    title: 'Salvas',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='bookmark' color={color} size={30} />
                    )
                }}
            />

        </Botton.Navigator>
    )
}