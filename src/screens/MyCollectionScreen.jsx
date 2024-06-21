import { StyleSheet,  View } from 'react-native'
import Header from '../components/Header'
import Filters from '../components/Filters'
import TabNav from '../components/TabNav'

const MyCollectionScreen = () => {
  return (
    <View>
      <Header/>
      <Filters/>
      <CarList/>
      <TabNav/>
    </View>
  )
}

export default MyCollectionScreen

const styles = StyleSheet.create({

})