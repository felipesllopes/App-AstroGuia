import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../pages/home"
import PhotoEarth from "../pages/photoEarth"
import PhotoSpace from "../pages/photoSpace"
import PhotosMars from "../pages/photosMars"
import DetailsRover from "../pages/photosMars/detailsRover"
import ThePlanets from "../pages/thePlanets"
import DetailsPlanets from "../pages/thePlanets/detailsPlanets"
import Planet from "../pages/thePlanets/planet"

export default function Routes() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#FFF',
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

            <Stack.Screen name="PhotosMars" component={PhotosMars}
                options={{
                    title: 'Imagens Rovers em Marte',
                }}
            />

            <Stack.Screen name="PhotoEarth" component={PhotoEarth}
                options={{ title: 'Foto Policromática da Terra' }}
            />

            <Stack.Screen name="DetailsRover" component={DetailsRover}
                options={{
                    title: 'Detalhes da imagem',
                }}
            />

        </Stack.Navigator>
    )

}