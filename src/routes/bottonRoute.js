import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../pages/photosMars/HomeRover/About';
import Favorites from '../pages/photosMars/HomeRover/Favorites';
import PhotosMars from '../pages/photosMars/HomeRover/Photos';

export default function BottonRoute() {

    const Botton = createBottomTabNavigator();

    return (
        <Botton.Navigator
            screenOptions={{
                tabBarStyle: { borderTopWidth: 0 },
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#DEB887',
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
                name='Favorites'
                component={Favorites}
                options={{
                    headerShown: false,
                    title: 'Favoritos',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='star' color={color} size={30} />
                    )
                }}
            />

        </Botton.Navigator>
    )
}