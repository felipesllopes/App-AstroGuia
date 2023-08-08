import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useMyContext } from "../Context/Context"
import Home from "../pages/home"
import PhotoEarth from "../pages/photoEarth"
import PhotoSpace from "../pages/photoSpace"
import HomeRover from "../pages/photosMars/HomeRover"
import DetailsPhoto from "../pages/photosMars/HomeRover/Photos/DetailsPhoto"
import ThePlanets from "../pages/thePlanets"
import DetailsPlanets from "../pages/thePlanets/detailsPlanets"
import Planet from "../pages/thePlanets/planet"
import BottonRoute from "./bottonRoute"

export default function StackRoute() {

    const Stack = createNativeStackNavigator();
    const { sharedValue } = useMyContext();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#FFF',
                animation: 'slide_from_right',
            }}
        >

            <Stack.Screen name="Home" component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="ThePlanets" component={ThePlanets}
                options={{ title: 'Planetas do Sistema Solar' }}
            />

            <Stack.Screen name="DetailsPlanets" component={DetailsPlanets} />

            <Stack.Screen name="Planet" component={Planet} />

            <Stack.Screen name="PhotoSpace" component={PhotoSpace}
                options={{
                    title: 'Foto Astronômica do dia',
                }}
            />

            <Stack.Screen name="HomeRover" component={HomeRover} options={{ title: 'Rover' }} />

            <Stack.Screen name="PhotoEarth" component={PhotoEarth}
                options={{ title: 'Foto Policromática da Terra' }}
            />

            <Stack.Screen name="DetailsPhoto" component={DetailsPhoto}
                options={{
                    title: 'Detalhes da imagem',
                }}
            />

            <Stack.Screen
                name="BottonRoute"
                component={BottonRoute}
                options={{
                    title: sharedValue,
                    headerTitleAlign: 'center',
                }}
            />

        </Stack.Navigator>
    )

}