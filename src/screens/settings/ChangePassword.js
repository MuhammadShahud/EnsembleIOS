import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SettingsHeader from '../../components/Header/SettingsHeader'
import { PoppinsBold, PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ChangePassword = () => {
  return (
    <View style={styles.mainView}>
      <View>
        <SettingsHeader/>
        <Text style={styles.change}>Change Password</Text>
      </View>
      <View style={styles.footerView}>
        <Text style={styles.powered}>Powered by</Text>
        <Text style={styles.ensemble}>ENSEMBLE</Text>
            </View>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'space-between'
    },
    change:{
        color:'black',
        fontFamily:PoppinsBold,
        fontSize:moderateScale(20),
        marginVertical:verticalScale(20),
        marginHorizontal:scale(20)
    },
    ensemble:{
        // fontWeight:'bold',
        color:'#8C8C8C',
        fontSize:moderateScale(20),
        fontFamily:PoppinsSemiBold
      },
      powered:{
        color:'#8C8C8C',
        fontFamily:PoppinsRegular,
        marginBottom:verticalScale(-5),
      },
      footerView:{
        marginHorizontal:scale(20),
        marginVertical:verticalScale(15)
      },
})