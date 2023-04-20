import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../home"
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
        <Stack.Navigator>

            <Stack.Screen name="Home" component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="ThePlanets" component={ThePlanets}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="DetailsPlanets" component={DetailsPlanets}
            />

            <Stack.Screen name="Planet" component={Planet}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="PhotoSpace" component={PhotoSpace}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="PhotosMars" component={PhotosMars}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="PhotoEarth" component={PhotoEarth}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="DetailsRover" component={DetailsRover}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )

}