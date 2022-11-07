import { StyleSheet, Text, View ,TextInput,Image} from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'

import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { search } from '../../../assets/images/images'

const InputField = (props) => {
  return (
    <View  style={[styles.input,props.inputStyle]}>
      

      <TextInput  placeholderTextColor={props.placeholderTextColor}   placeholder={props.placeholder} />
        <Image source={props.source}/>
    </View>

  )
}

export default InputField

const styles = StyleSheet.create({
 
  input: {
    // paddingHorizontal:scale(20),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderWidth: 1,
    backgroundColor: 'white',
    marginHorizontal: scale(20),
    borderColor: 'white',
    borderRadius: moderateScale(35),
   paddingHorizontal:scale(20),
    marginTop: verticalScale(10),
    textAlignVertical: 'top',
    // paddingBottom:verticalScale(35),


},
})