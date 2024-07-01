import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import WishListScreen from '../screens/WishListScreen'
import AddCarScreen from '../screens/AddCarScreen'
import MyCollectionScreen from '../screens/MyCollectionScreen'
import CarDetailScreen from '../screens/CarDetailScreen'


const MainStackNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (
  
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name='WishListScreen' 
        component={WishListScreen}
      />
      <Stack.Screen 
        name='AddCar' 
        component={AddCarScreen} 
      />
      <Stack.Screen 
        name='MyCollection' 
        component={MyCollectionScreen} 
      />
      <Stack.Screen 
        name='CarCard' 
        component={CarDetailScreen}
      />
    </Stack.Navigator>
    
  )
}

export default MainStackNavigator