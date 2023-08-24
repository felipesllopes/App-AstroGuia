import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsPlanets from "../Components/detailsPlanets";
import { useMyContext } from "../Context/Context";
import Home from "../pages/home";
import PhotoEarth from "../pages/photoEarth";
import PhotoSpace from "../pages/photoSpace";
import HomeRover from "../pages/photosMars/HomeRover";
import DetailsPhoto from "../pages/photosMars/HomeRover/Photos/DetailsPhoto";
import ThePlanets from "../pages/thePlanets";
import Planet from "../pages/thePlanets/planet";
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
                name="ThePlanets"
                component={ThePlanets}
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
                name="PhotoSpace"
                component={PhotoSpace}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="HomeRover"
                component={HomeRover}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PhotoEarth"
                component={PhotoEarth}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DetailsPhoto"
                component={DetailsPhoto}
                options={{
                    title: 'Detalhes da imagem',
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#FFF'
                }}
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