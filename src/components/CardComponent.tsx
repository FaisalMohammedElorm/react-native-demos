import { View, Text, Image, Button, StyleSheet } from 'react-native'
import React from 'react'

const CardComponent = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/person.jpg')}
        style={styles.imageStyle}
        />
      <Text style={styles.heading}>Mohammed Faisal Elorm</Text>
      <Text style={styles.text}>My name is Faisal and I love coding.</Text>
      <Button title="Press Me"/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
    margin: 20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  imageStyle:{
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  heading:{
    fontSize: 20,
    marginBottom: 10
  },
  text:{
    marginBottom: 20,
  }
});
export default CardComponent