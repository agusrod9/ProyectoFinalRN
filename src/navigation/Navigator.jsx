import { NavigationContainer } from '@react-navigation/native'
import BottomTabsNavigator from './BottomTabsNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSession } from '../persistence'
import { setUser } from '../features/userSlice'


const Navigator = () => {
  const {user} = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()

  useEffect(()=>{
    (async()=>{
      try{
        const response = await getSession()
        if(response.rows.length){
          const user = response.rows._array[0]
          dispatch(setUser({
            email: user.email,
            localId: user.localId,
            idToken: user.token
          }))
        }
      }catch (error){
        //display Modal
      }
    })()})


  return (
    <NavigationContainer>
      {user ? <BottomTabsNavigator/> : <AuthStackNavigator/>}
    </NavigationContainer>
  )
}

export default Navigator

