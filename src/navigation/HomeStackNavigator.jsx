import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import AllCarsScreen from '../screens/AllCarsScreen'


const Stack = createNativeStackNavigator()

export default function HomeStackNavigator() {

  return (
      <Stack.Navigator initialRouteName='Home'>
        
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='AllCarsScreen' component={AllCarsScreen} />
       

      </Stack.Navigator>
  )
}


