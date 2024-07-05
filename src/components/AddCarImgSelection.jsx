import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useState } from 'react'
import { Color } from '../global/myColors'

const AddCarImgSelection = () => {

  const [image, setImage] = useState(null)
  const verifyCameraPermission = async () => {

  }
  const pickImage = async () => {

  }
  const confirmImage = () => {

  }
  return (
    <View style={styles.container}>
      {image ?
      <View style={styles.imgContainer}>
        <Image 
          source={{uri: image}} 
          style={styles.img}
        />
        <Pressable
          style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}
        >
            <Text style={styles.txtPressable}>Tomar nueva foto</Text>
        </Pressable>
      </View>
      :
      <View style={styles.imgContainer}>
        <Image 
          source={require('../../assets/img/defCarImg.png')} 
          style={styles.img}
          resizeMode='contain'
        />
        <Pressable
        style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}
        >
        <Text style={styles.txtPressable}>Agregar foto</Text>
      </Pressable>
      </View>
      }
    </View>
  )
}

export default AddCarImgSelection

const styles = StyleSheet.create({
    container:{
        backgroundColor: Color.appBG,
        alignItems:'center'
    },
    imgContainer:{
        height:200,
        width: 200
    },
    img:{
        height:200,
        width: 200,
    },
    pressable:{
        marginTop:10,
        backgroundColor: Color.cardBG,
        width:'100%',
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