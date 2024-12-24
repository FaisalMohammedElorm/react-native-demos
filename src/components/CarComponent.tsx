import { View, Text, Image, Button } from 'react-native'
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
      <Image source={require('../assets/car.jpg')}
        style={{
          width: imageWidth,
          height: imageHeight,
        }}
      />
      <Text>{carName}</Text>
      <Text>{carRatings}</Text>
      <Text>{carDescription}</Text>
      <Text>{price}</Text>
      <Button title='Add to Cart'/>
    </View>
  )
}

export default CarComponent

          