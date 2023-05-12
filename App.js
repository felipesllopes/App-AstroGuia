import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Routes from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Routes />
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})