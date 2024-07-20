import { NavigationContainer } from '@react-navigation/native'
import BottomTabsNavigator from './BottomTabsNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useState } from 'react'
import { useSelector } from 'react-redux'


const Navigator = () => {
    const {user} = useSelector((state) => state.auth.value)
  return (
    <NavigationContainer>
      {user ? <BottomTabsNavigator/> : <AuthStackNavigator/>}
    </NavigationContainer>
  )
}

export default Navigator

