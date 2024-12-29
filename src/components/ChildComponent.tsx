import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

interface ChildProps {
  name: string;
  age: number;
  hobbies: string[];
}

const ChildComponent = ({name, age, hobbies}: ChildProps) => {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Hobbies: {hobbies}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  
});
export default ChildComponent