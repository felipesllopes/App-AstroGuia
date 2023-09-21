import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsPlanets from "../Components/DetailsPlanets";
import { useMyContext } from "../Context/Context";
import AstronomicalPhoto from "../pages/AstronomicalPhoto";
import EarthPolychromaticPhoto from "../pages/EarthPolychromaticPhoto";
import PlanetsSolarSystem from "../pages/PlanetsSolarSystem";
import Planet from "../pages/PlanetsSolarSystem/planet";
import Home from "../pages/Home";
import MarsRoverPhotos from "../pages/photosMars";
import BottonRoute from "./bottonRoute";

export default function StackRoute() {

    const Stack = createNativeStackNavigator();
    const { sharedValue } = useMyContext();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTintColor: '#000',
                animation: 'slide_from_right',
            }}
        >

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PlanetsSolarSystem"
                component={PlanetsSolarSystem}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DetailsPlanets"
                component={DetailsPlanets}
            />

            <Stack.Screen
                name="Planet"
                component={Planet}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="AstronomicalPhoto"
                component={AstronomicalPhoto}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="MarsRoverPhotos"
                component={MarsRoverPhotos}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="EarthPolychromaticPhoto"
                component={EarthPolychromaticPhoto}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="BottonRoute"
                component={BottonRoute}
                options={{
                    title: sharedValue, headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: "#000" }, headerTintColor: '#FFF'
                }}
            />

        </Stack.Navigator>
    )

}