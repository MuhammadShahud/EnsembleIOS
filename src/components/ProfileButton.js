import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ButtonColor } from '../../assets/colors/colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Entypo from 'react-native-vector-icons/Entypo'

const ProfileButton = () => {
  return (
    <TouchableOpacity style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
            <Text style={{color:ButtonColor,fontWeight:'700',fontSize:moderateScale(10)}}>View Profile</Text>
            <Entypo name='chevron-small-right' size={15} color={ButtonColor}/>
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default ProfileButton

const styles = StyleSheet.create({
    buttonView:{
        flex:1,
        borderWidth:1,
        borderColor:ButtonColor,
        // alignItems:'center',
        paddingVertical:verticalScale(5),
        // paddingHorizontal:scale(10),
        borderRadius:moderateScale(20),
        // fontSize:moderateScale(10)
    },
    button:{
        flexDirection:'row',
        alignSelf:"center"
        
    }
})