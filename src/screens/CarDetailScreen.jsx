import { StyleSheet, Text, View } from 'react-native'
import { Card, Button, Icon } from '@rneui/themed'
import { Color } from '../global/myColors'

const CarDetailScreen = ({navigation, route}) => {
  console.log(route)
  const {model, photo_url, series, series_num} = route.params
  return (
    <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.title}>{model}</Card.Title>
          <Card.Image
            style={{ padding: 0 }}
            source={{uri:photo_url}}
          />
          <Text style={{ marginTop: 10 }}>
            Serie: {series}
          </Text>
          <Text style={{marginBottom:10}}>
            Número: {series_num}</Text>
          <Button
            icon={
              <Icon
                name="code"
                color= {Color.homeIconsText}
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              backgroundColor: Color.appBG,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
            }}
            title="VIEW NOW"
          />
        </Card>
      </View>
  )
}

export default CarDetailScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.appBG,
    justifyContent:'center',
    flex: 1,
  },
  card:{
    backgroundColor: Color.cardBG,
    borderColor:'black',
  },
  title:{
    color:'black',
    fontSize:20
  }
})

/*
"params":

"model": ["'67 Shelby GT500"], 
"photo_url": "https://static.wikia.nocookie.net/hotwheels/images/b/b5/67_Shelby_GT500_-_2010_NM.jpg/revision/latest?cb=20090913235854", 
"series": ["2010 New Models"], 
"series_num": ["1/44"], 
"toy_num": ["R0916"], 
"year": "2010"}, 
"path": undefined}
*/