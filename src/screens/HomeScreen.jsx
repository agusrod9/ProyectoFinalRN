import { StyleSheet, View} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header style={styles.header}/>
      <Home/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    width:'100%',
    //justifyContent:'center',
  },
  header:{
    alignSelf:'flex-start'
  }
})