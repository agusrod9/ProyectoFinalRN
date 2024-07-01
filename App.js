import { SafeAreaView, StyleSheet } from 'react-native';
import { Color } from './src/global/myColors';
import { useFonts } from 'expo-font';
import Navigator from './src/navigation/Navigator';



export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    gruppo: require('./assets/fonts/Gruppo-Regular.ttf'),
    lilita: require('./assets/fonts/LilitaOne-Regular.ttf'),
    play: require('./assets/fonts/Play-Regular.ttf')
  })
  
  
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}> 
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.appBG,
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  }
});
