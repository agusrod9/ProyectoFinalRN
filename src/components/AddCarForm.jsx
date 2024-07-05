import { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native'
import { Color } from '../global/myColors'
const AddCarForm = () => {

  const [model, setModel] = useState('')
  const [series, setSeries] = useState('')
  const [seriesNumber, setSeriesNumber] = useState('')
  const [year, setYear] = useState('')
  

  return (
    <View style={styles.container}>
      <Text style={styles.txtInput}>Modelo</Text>
      <TextInput
        style={styles.input}
        placeholder='Modelo, en la parte de inferior del blister'
        onChangeText={setModel}
        value={model}
      />
      <Text style={styles.txtInput}>Colección</Text>
      <TextInput
        style={styles.input}
        placeholder='Colección, en la parte inferior derecha del blister'
        onChangeText={setSeries}
        value={series}
      />
      <Text style={styles.txtInput}>Número</Text>
      <TextInput
        style={styles.input}
        placeholder='Número de serie, sobre la colección'
        onChangeText={setSeriesNumber}
        value={seriesNumber}
      />
      <Text style={styles.txtInput}>Año</Text>
      <TextInput
        style={styles.input}
        placeholder='Año de la colección, se encuentra al dorso'
        onChangeText={setYear}
        value={year}
      />
      <Pressable
        style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}
        >
        <Text style={styles.txtPressable}>Guardar</Text>
      </Pressable>
    </View>
  )
}

export default AddCarForm

const styles = StyleSheet.create({
  container:{
    marginTop:30
  },
  input: {
    width:'90%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white',
    borderRadius:8
  },
  txtInput:{
    marginLeft:'4%',
    color:'white'
  },
  pressable:{
    marginTop:10,
    backgroundColor: Color.cardBG,
    width:'50%',
    alignSelf:'center',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical: 7,
    borderRadius: 5
},
txtPressable:{
    color:'white'
}
})