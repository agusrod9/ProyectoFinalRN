import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'

const Filters = () => {

  const [selected, setSelected] = useState([])

  const data = [
    {key:'1', value:'Mobiles', disabled:true},
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'4', value:'Computers', disabled:true},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
  ]

  return (
    <View style={styles.container}>
      <SelectList 
        placeholder='Modelo'
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
      />
      <SelectList
        placeholder='Colección'
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
      />
    </View>
  )
}

export default Filters

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'center'
  }
})