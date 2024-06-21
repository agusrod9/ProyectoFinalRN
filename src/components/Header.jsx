import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:50,
    backgroundColor:'#002d5b',
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize:30,
    color:'white'
  }
})