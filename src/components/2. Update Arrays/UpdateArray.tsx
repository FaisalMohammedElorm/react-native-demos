import { View, Text, FlatList, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateArray = () => {
  const [friends, setFriends] = useState(['Alex', 'John', 'Jordan']);
    const addOne = () => setFriends([...friends, 'HuXn']);
    const removeOne = () => setFriends(friends.filter(f => f != 'John'))
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={friend => friend}
        renderItem={({ item}) => <Text>{item}</Text>}
      />
      <Button title="Add One" onPress={addOne}/>
      <Button title="Remove One" onPress={removeOne}/>
    </View>
  )
}

export default UpdateArray