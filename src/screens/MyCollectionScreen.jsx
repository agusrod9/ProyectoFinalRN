import { StyleSheet, View } from 'react-native'
import Filters from '../components/Filters'
import CarList from '../components/CarList'
import { Color } from '../global/myColors'
import { useEffect, useState } from 'react'
import { useGetCarsQuery, useGetCollectedCarsByUserQuery } from '../services/dbServices'
import EmptyCollection from '../components/EmptyCollection'
import { useSelector } from 'react-redux'

const MyCollectionScreen = ({navigation}) => {
  const {data, isLoading} = useGetCarsQuery()
  const {user} = useSelector((state) => state.auth.value)
  const [keyword, setKeyword] = useState('')
  const [filteredCars, setFilteredCars] = useState([])
  const [cantidadAutos, setCantidadAutos] = useState(0)
 
  useEffect(()=>{
    if(!isLoading){
      setCantidadAutos (data.length)
      const filtered = data.filter(
        (car) => car.model.toLocaleString().toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
      setFilteredCars(filtered)
    }
    }, [keyword, setKeyword, data, isLoading])

  return (
    <View style={styles.container}>
      <Filters keyword={keyword} setKeyWord={setKeyword}/>
      { cantidadAutos !=0 || isLoading ? <CarList navigation={navigation} data={filteredCars}/> : <EmptyCollection navigation={navigation} user={user}/>}
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