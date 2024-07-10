import { StyleSheet, View } from 'react-native'
import Filters from '../components/Filters'
import TabNav from '../components/TabNav'
import CarList from '../components/CarList'
import data from '../data/all_cars.json'
import { Color } from '../global/myColors'
import { useState, useEffect } from 'react'


const AllCarsScreen = ({navigation}) => {

  const [keyword, setKeyword] = useState('')
  const [filteredCars, setFilteredCars] = useState([])
  
  useEffect(()=>{
    
    const filtered = data.filter(
      (car) => car.model.toLocaleString().toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
      setFilteredCars(filtered)

    }, [keyword, setKeyword])
  return (
    <View style={styles.container}>
      <Filters keyword={keyword} setKeyWord={setKeyword}/>
      <CarList navigation={navigation} data={filteredCars}/>
      <TabNav/>
    </View>
  )
}

export default AllCarsScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:Color.appBG,
    flex: 1,
    alignContent:'space-between',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  }
})