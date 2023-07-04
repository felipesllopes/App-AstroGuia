import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../home"
import PhotoEarth from "../pages/photoEarth"
import PhotoSpace from "../pages/photoSpace"
import PhotosMars from "../pages/photosMars"
import DetailsRover from "../pages/photosMars/detailsRover"
import ThePlanets from "../pages/thePlanets"
import Planet from "../pages/thePlanets/planet"

export default function Routes() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>

            <Stack.Screen name="Home" component={Home}
                options={{ headerShown: false, navigationBarHidden: true }}
            />

            <Stack.Screen name="ThePlanets" component={ThePlanets}
                options={{ headerShown: false, navigationBarHidden: true }}
            />

            <Stack.Screen name="Planet" component={Planet}
                options={{
                    title: 'Voltar',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: 'white',
                    navigationBarHidden: true
                }}
            />

            <Stack.Screen name="PhotoSpace" component={PhotoSpace}
                options={{
                    headerShown: false,
                    navigationBarHidden: true
                }}
            />

            <Stack.Screen name="PhotosMars" component={PhotosMars}
                options={{
                    navigationBarHidden: true, title: 'Voltar',
                    headerStyle: {
                        backgroundColor: '#DDD'
                    }
                }}
            />

            <Stack.Screen name="PhotoEarth" component={PhotoEarth}
                options={{ headerShown: false, navigationBarHidden: true }}
            />

            <Stack.Screen name="DetailsRover" component={DetailsRover}
                options={{
                    title: 'Detalhes Rover', navigationBarHidden: true,
                    headerStyle: {
                        backgroundColor: '#DDD'
                    }
                }}
            />

        </Stack.Navigator>
    )

}