import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface EmployeeInfo{
  imageProp: ImageSourcePropType,
  titleProp:string,
  nameProp:string,
  ageProp:number,
}
const SquareComp = ({imageProp, titleProp, nameProp, ageProp}:EmployeeInfo) => {
  return (
    <View style={styles.main}>
      <Text>squareComp</Text>
     <Image source={imageProp} style={styles.imgStyle}/>    
<View style={styles.wrapText}>
<Text>Title: {titleProp}</Text>
<Text>Name: {nameProp}</Text>
<Text>Age: {ageProp}</Text>
</View>
    </View>
  )
}

export default SquareComp

const styles = StyleSheet.create({
    main:{
        borderColor:'green',
        borderWidth:2,
        padding:15,
       width:'45%',
       gap:15,
       borderRadius:10,

    },
    imgStyle:{
      height:150,
      width:'100%',
    },
    wrapText:{
      textAlign:'left',
    }

})