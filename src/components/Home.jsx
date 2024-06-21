import { Pressable, StyleSheet, View, Text } from 'react-native'
import { MaterialIcons , MaterialCommunityIcons , SimpleLineIcons   } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.icon} onPress={()=>{console.log('Agregar auto')}}>
        <SimpleLineIcons name="camera" size={90} color="black" />
        <Text style={styles.iconText}>Agregar auto</Text>
      </Pressable>

      <Pressable style={styles.icon} onPress={()=>{console.log('Ver colección')}}>
        <MaterialIcons name="grid-view" size={90} color="black" />
        <Text style={styles.iconText}>Ver colección</Text>
      </Pressable>

      <Pressable style={styles.icon} onPress={()=>{console.log('Deseos')}}>
        <MaterialCommunityIcons name="cart-heart" size={90} color="black" />
        <Text style={styles.iconText}>Deseos</Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent:'space-between',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  },
  icon:{
    margin: 40,
    alignContent:'center',
    justifyContent:'center',
  },
  iconText:{
    textAlign:'center',
    fontSize:15
  }
})