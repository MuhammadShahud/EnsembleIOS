import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Questions = (props) => {
  return (
    <View>
     <Text style={[styles.text,props.questionText]}>{props.title}</Text>    
     </View>
  )
}

export default Questions

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: moderateScale(35),
        marginHorizontal: scale(20),
        fontWeight: 'bold',
        marginBottom:verticalScale(10)
    },
})