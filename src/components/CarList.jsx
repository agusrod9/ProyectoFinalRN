import { View , StyleSheet, FlatList, Text, Image} from 'react-native'
import data from '../data/test_cars.json'

const CarList = () => {
    
  return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                style={styles.lista}
                renderItem={({item})=>
                    <View style={styles.card}>
                        <Image 
                            source={{uri: item.photo_url}}
                            style={styles.img}
                            resizeMode='contain'
                        />
                        <Text style={styles.modelo}>{item.model}</Text>
                    </View>
                }
            />
        </View>
  )
}

export default CarList

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    lista:{
        width:'100%',
        padding:20,
        alignContent:'space-evenly',
    },
    card:{
        flex:1,
        width:'90%',
        height:150,
        borderColor:'black',
        borderRadius:15,
        borderWidth:1,
        padding:8,
        justifyContent:'center',
        margin: 'auto', //centro las cards
        marginBottom:15 //las separo
    },
    img:{
        height:'90%',
        //width:'100%',
        //resizeMode:'contain' -> Deprecado, lo paso a prop
    },
    modelo:{
        fontSize:16,
        textAlign:'center'
    }
})