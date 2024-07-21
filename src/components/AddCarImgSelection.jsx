import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useState } from 'react'
import { Color } from '../global/myColors'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch } from 'react-redux'
import { addCarImg } from '../features/carSlice'

const AddCarImgSelection = () => {

  const [image, setImage] = useState(null)
  const dispatch = useDispatch()
  const verifyCameraPermission = async () => {
    
    const {status} = await ImagePicker.requestCameraPermissionsAsync()
    if (!status){
      return false
    }
    return true
  }
  const pickImage = async () => {
    const permissionsGranted = await verifyCameraPermission()

    if (permissionsGranted){
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
        base64: true,
      })
      
      
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
        dispatch(addCarImg(image))
      }
      
    }

  }
  
  return (
    <View style={styles.container}>
      {image ?
      <View style={styles.imgContainer}>
        <Image 
          source={{uri: image}} 
          style={styles.img}
          resizeMode='contain'
        />
        <Pressable
          style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}
          onPress={pickImage}
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
        onPress={pickImage}
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