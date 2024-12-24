import { View, Text } from 'react-native'
import React from 'react'

const DynamicContent = () => {
  const username = 'Mohammed Faisal Elorm'
  const multiply = (a: number, b: number) => a + b
  // let myself = { name: "Faisal", age: 20}

  return (
    <View>
      <Text>My name is {username}</Text>
      <Text>2 * 2 = {multiply(2,2)}</Text>
      <Text>2 + 2 = {2 + 2}</Text>
      {/* <Text>{myself.name}</Text> */}
    </View>
  )
}

export default DynamicContent