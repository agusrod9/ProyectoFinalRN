import { SafeAreaView, StyleSheet } from 'react-native';
import { Color } from './src/global/myColors';
import { useFonts } from 'expo-font';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { initSQLiteDB } from './src/persistence';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

(async ()=> {

    try {
      const response = await initSQLiteDB()
    } catch (error) {

    }
    })()

export default function App() {

  

  const [fontsLoaded, fontError] = useFonts({
    gruppo: require('./assets/fonts/Gruppo-Regular.ttf'),
    lilita: require('./assets/fonts/LilitaOne-Regular.ttf'),
    play: require('./assets/fonts/Play-Regular.ttf'),
    playBold: require('./assets/fonts/Play-Bold.ttf')
  })
  
  
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}> 
      <Provider store={store}>
        <Navigator />
      </Provider>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.appBG,
    flex: 1,
  }
});
