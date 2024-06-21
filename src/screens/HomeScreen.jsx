import { Image, StyleSheet, View} from 'react-native'
import Home from '../components/Home'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/*<Header style={styles.header}/>*/}
      <Image 
        source={require('../../assets/img/HW-logo.png')} 
        style={styles.logo}
        resizeMode='contain'
      />
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
  },
  logo:{
    height:60,
    width:'80%',
    margin: 'auto',
    marginTop:15
  }
})