import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Filters from '../components/Filters'
import TabNav from '../components/TabNav'
import CarList from '../components/CarList'

const WishListScreen = () => {
  return (
    <View>
      <Header/>
      <Filters/>
      <CarList/>
      <TabNav/>
    </View>
  )
}

export default WishListScreen

const styles = StyleSheet.create({})