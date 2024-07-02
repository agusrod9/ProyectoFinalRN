import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import WishListScreen from '../screens/WishListScreen'
import AddCarScreen from '../screens/AddCarScreen'
import MyCollectionScreen from '../screens/MyCollectionScreen'
import CarDetailScreen from '../screens/CarDetailScreen'
import CameraScreen from '../screens/CameraScreen'
import WishListSelectionScreen from '../screens/WishListSelectionScreen'
import AllCarsScreen from '../screens/AllCarsScreen'


const MainStackNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (
  
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitle:'Inicio'
        }}
      />
      <Stack.Screen 
        name='WishListScreen' 
        component={WishListScreen}
        options={
          {
            headerTitle:'Deseados'
          }
        }
      />
      <Stack.Screen 
        name='WishListSelectionScreen' 
        component={WishListSelectionScreen}
        options={
          {
            headerTitle:'Deseados'
          }
        }
      />
      <Stack.Screen 
        name='AddCar' 
        component={AddCarScreen}
        options={
          {
            headerTitle:'Nuevo auto'
          }
        }
      />
      <Stack.Screen 
        name='MyCollection' 
        component={MyCollectionScreen}
        options={
          {
            headerTitle:'Colección'
          }
        }
      />
      <Stack.Screen 
        name='CarCard' 
        component={CarDetailScreen}
        options={
          {
            headerTitle:'Detalle'
          }
        }
      />
      <Stack.Screen 
        name='Camera' 
        component={CameraScreen}
        options={
          {
            headerTitle:'Cámara'
          }
        }
      />
      <Stack.Screen 
        name='AllCarsScreen' 
        component={AllCarsScreen}
        options={
          {
            headerTitle:'Todos los modelos'
          }
        }
      />
    </Stack.Navigator>
    
  )
}

export default MainStackNavigator