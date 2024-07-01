import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigator from './MainStackNavigator'


const Navigator = () => {
    
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  )
}

export default Navigator