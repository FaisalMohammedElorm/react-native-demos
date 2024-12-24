import { View, Text, Image, Button, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CarComponent = () => {
  const price = 2000000;
  const imageWidth = 300;
  const imageHeight = 300;
  const carName = "Lamo";
  const carRatings = 3.5;
  const carDescription = "Here is some random car description"

  return (
    <View>
      <Text style={styles.pill}>${price}</Text>
        <Image source={require('../assets/car.jpg')}
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        /> 
        <Text style={styles.heading}>{carName}</Text>
        {/* <Text>{carRatings}</Text> */}
        <Text>{carDescription}</Text>
        
        {/* <Button title='Add to Cart'/> */}

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Learn More</Text>
        </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  pill:{
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginBottom: 10,
    width: 80,
    marginTop: 20,
    textAlign: 'center'
  },
  heading:{
    fontSize: 20
  },
  button:{
    backgroundColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    marginBottom: 10,
    textAlign: 'center',
    width: 120 
  },
  buttonText:{
    color: 'white',
    padding: 10
  }
});
export default CarComponent

          