import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigator from './MainStackNavigator'
import BottomTabsNavigator from './BottomTabsNavigator'
import { StyleSheet } from 'react-native'
import { Color } from '../global/myColors'


const Navigator = () => {
    
  return (
    <NavigationContainer>
     <BottomTabsNavigator/>
    </NavigationContainer>
  )
}

export default Navigator

