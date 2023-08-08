import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { MyProvider } from './src/Context/Context';
import Routes from './src/routes/stackRoute';

export default function App() {
  return (
    <MyProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar backgroundColor={'#444'} />
      </NavigationContainer>
    </MyProvider>
  );
}
