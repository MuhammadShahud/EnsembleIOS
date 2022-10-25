import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { backArrow, ptLogo } from '../../../assets/images/images'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { scale, verticalScale } from 'react-native-size-matters';

const QuestionHeader = (props) => {
  return (
    <View style={styles.mainView}>
      {/* <Text>QuestionHeader</Text> */}
      <Image source={backArrow}  resizeMode="contain"/>
      <View style={styles.header}>
        <Image source={ptLogo}  resizeMode="contain" />
        <Text style={styles.text}>{props.title} </Text>
      </View>
    </View>
  )
}

export default QuestionHeader

const styles = StyleSheet.create({
    mainView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:scale(20),
        marginVertical:verticalScale(20)
    },
    header:{
        flexDirection:'row',
        alignItems:'center',

    },
    text:{
        fontSize: wp('4%'),
        color:'black',
        fontWeight:'bold',
        fontFamily: 'Poppins',
        textAlign: 'center',
        paddingLeft:scale(10)
    }
})