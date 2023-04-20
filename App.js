import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})