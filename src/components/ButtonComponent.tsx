import { View, Text, Button, Pressable} from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
      <Text>Let's explore buttons</Text>
      <Pressable onPress={() => console.log("Pressed")}>
        <Text 
          style={{
          color: 'teal'
        }}>
          Press Me
        </Text>
      </Pressable>
      <Pressable onPressIn={() => console.log("On Press In")}>
        <Text 
          style={{
          color: 'coral'
        }}>
          Press Me
        </Text>
      </Pressable>
      <Pressable onPressOut={() => console.log("On Press Out")}>
        <Text 
          style={{
          color: 'magenta'
        }}>
          Press Me
        </Text>
      </Pressable>
      <Pressable onLongPress={() => console.log("On Long Press")}>
        <Text 
          style={{
          color: 'crimson'
        }}>
          Press Me
        </Text>
      </Pressable>
    </View>
  )
}

export default ButtonComponent