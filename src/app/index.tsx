import { View, Text } from 'react-native'
import React from 'react'
import Greet from '../components/Greet'
import ComponentA from '../components/ComponentA'
import Name from '../components/Name'
import Age from '../components/Age'
import Handle from '../components/Handle'
import Subject from '../components/Subject'


const Index = () => {
  return (
    <View>
      <Name/>
      <Age/>
      <Handle/>
      <Subject/>
    </View>
  )
}


export default Index