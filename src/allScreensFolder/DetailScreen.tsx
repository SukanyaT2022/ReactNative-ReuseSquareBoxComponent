import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SquareComp from '../components/SquareComp'
import dog1 from '../../asset/image/imgDog1.jpg'
import { employees } from '../dataFolder/data'


const DetailScreen = ({}) => {
  return (
    <View>
      <Text>DetailScreen</Text>
{/* <SquareComp 
imageProp={dog1}
titleProp='manager'
nameProp='pepe'
ageProp='3'
/> */}

<FlatList
data={employees}
renderItem={({item})=><SquareComp 
imageProp={item.image as any}
titleProp={item.department}
nameProp={item.name}
ageProp={item.age as number}
/>}
keyExtractor={item => item.id.toString()}
/>

    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})

