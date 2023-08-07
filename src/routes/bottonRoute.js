import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../pages/photosMars/HomeRover/About';
import Favorites from '../pages/photosMars/HomeRover/Favorites';
import PhotosMars from '../pages/photosMars/HomeRover/Photos';

export default function BottonRoute({ route }) {

    const Botton = createBottomTabNavigator();

    return (
        <Botton.Navigator>

            <Botton.Screen
                name='PhotosMars'
                component={PhotosMars}
                options={{
                    headerShown: false,
                    title: 'Fotos',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='camera' color={color} size={size} />
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
                        <Ionicons name='information-circle' color={color} size={size} />
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
                        <Ionicons name='star' color={color} size={size} />
                    )
                }}
            />

        </Botton.Navigator>
    )
}