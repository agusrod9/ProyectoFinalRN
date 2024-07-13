import { StyleSheet,  View } from 'react-native'
import Filters from '../components/Filters'
import CarList from '../components/CarList'
import data from '../data/test_cars.json'
import { Color } from '../global/myColors'
import { useEffect, useState } from 'react'


const MyCollectionScreen = ({navigation}) => {

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