import { StyleSheet,  View } from 'react-native'
import Filters from '../components/Filters'
import TabNav from '../components/TabNav'
import CarList from '../components/CarList'
import data from '../data/test_cars.json'
import { Color } from '../global/myColors'

const MyCollectionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Filters/>
      <CarList navigation={navigation} data={data}/>
      <TabNav/>
    </View>
  )
}

export default MyCollectionScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:Color.appBG,
    flex: 1,
    alignContent:'space-between',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  },
})