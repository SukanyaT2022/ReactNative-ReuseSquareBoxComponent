import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { screen } from '../../App'

const HomeScreen = ({navigation}:any) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={()=>navigation.navigate(screen.details
        
      )}><Text>Click to detailScren</Text></TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})