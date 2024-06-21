import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === 'ios' ? '#2566af' : 'lightblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
