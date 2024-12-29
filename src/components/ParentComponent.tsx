import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <View>
      <Text>Parent Component</Text>
      <ChildComponent 
        name="Mohammed Faisal Elorm" 
        age={20} 
        hobbies={[ "Singing", "Coding", "Cooking"]}
        />
    </View>
  )
}
const styles = StyleSheet.create({
  
});
export default ParentComponent