import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const InputField = (props) => {
  console.log(props.onChangeText,"asdasdas");
  return (
    <View>
      

      <TextInput value = {props.value? props.value :null} onChangeText={props.onChangeText? (e)=>props.onChangeText(e):null} style={[styles.input,props.inputStyle]} placeholder={props.placeholder} />      
      
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
 
  input: {
    // paddingHorizontal:scale(20),
    borderWidth: 1,
    backgroundColor: 'white',
    marginHorizontal: scale(20),
    borderColor: 'white',
    borderRadius: moderateScale(25),
    paddingLeft: scale(20),
    marginTop: verticalScale(10),
    textAlignVertical: 'top',
    paddingBottom:verticalScale(35)


},
})