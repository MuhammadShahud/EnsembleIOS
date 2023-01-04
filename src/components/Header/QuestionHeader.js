import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { backArrow, ptLogo } from '../../../assets/images/images'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { PoppinsBold } from '../../../assets/fonts/Fonts';

const QuestionHeader = (props) => {
  const navigation=useNavigation();
  return (
    <View style={styles.mainView}>
    <MaterialCommunityIcons
      name='keyboard-backspace' size={25} color={'black'} onPress={()=>navigation.goBack()}/>

      <View style={styles.header}>
        <Image source={ptLogo}  resizeMode="contain" />
        <Text style={styles.text}>The Plum Tree Group </Text>
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
        fontSize:moderateScale(14),
        color:'black',
        fontFamily: PoppinsBold,
        textAlign: 'center',
        paddingLeft:scale(10)
    }
})