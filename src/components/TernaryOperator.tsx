import { View, Text } from 'react-native'
import React from 'react'

const ValidPassword = () => <Text>Valid Password</Text>
const InvalidPassword = () => <Text>Invalid Password</Text>

const Password = ({ isValid }) => {
  // if(isValid) {
  //     return <ValidPassword />
  // } 
  // return <InvalidPassword />
  return isValid ? <ValidPassword /> : <InvalidPassword />
}

const TernaryOperator = () => {
  return (
    <View>
      <Password isValid={false}/>
    </View>
  )
}

export default TernaryOperator