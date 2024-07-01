import { StyleSheet,  View } from 'react-native'
import Header from '../components/Header'
import Filters from '../components/Filters'
import TabNav from '../components/TabNav'
import CarList from '../components/CarList'

const MyCollectionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Filters/>
      <CarList navigation={navigation}/>
      <TabNav/>
    </View>
  )
}

export default MyCollectionScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent:'space-between',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  }
})