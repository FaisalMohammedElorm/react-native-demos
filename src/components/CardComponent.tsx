import { View, Text, Image, Button } from 'react-native'
import React from 'react'

const CardComponent = () => {
  return (
    <View>
      <Image 
        source={require('../assets/person.jpg')}
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          marginBottom: 20
        }}
        />
      <Text style={{ fontSize: 20 }}>Mohammed Faisal Elorm</Text>
      <Text style={{ fontSize: 20 }}>My name is Faisal and I love coding.</Text>
      <Button title="Press Me"/>
    </View>
  )
}

export default CardComponent