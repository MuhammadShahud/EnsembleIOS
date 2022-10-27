import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { communication, management } from '../../../assets/images/images'
import { ButtonColor } from '../../../assets/colors/colors'
// import communication from '../../../assets/images/communication'

const RockstarSkills = (props) => {
    const [btnState,setBtnState]=useState('white')
    const [btnState1,setBtnState1]=useState('white')
    const [btnTextColor,setBtnTextColor]=useState('black')
    const [btnTextColor1,setBtnTextColor1]=useState('black')
    const changeButtonColor=()=>{
        setBtnState(ButtonColor)
    }
    const changeButtonColor1=()=>{
        setBtnState1(ButtonColor)
    }

    const changeTextColor=()=>{
        setBtnTextColor('white')
    }
    const changeTextColor1=()=>{
        setBtnTextColor1('white')
    }
    
  return (
    <View style={styles.mainView}>

    <View style={styles.firstView}>
        <TouchableOpacity onPress={changeButtonColor} style={[styles.communicationView,{backgroundColor:btnState}]}>
            <Image source={props.firstImage}/>
            <Text style={[styles.text,{color:btnTextColor}]}>{props.firstTitle}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={changeButtonColor1}  style={[styles.managementView,{backgroundColor:btnState1}]}>

        <Image source={props.secondImage}/>
        <Text  style={styles.text}>{props.secondTitle}</Text>


        </TouchableOpacity>
    </View>   

    </View>
  )
}

export default RockstarSkills

const styles = StyleSheet.create({
    mainView:{
        marginHorizontal:scale(20),
        marginBottom:verticalScale(5),
        marginTop:verticalScale(8)

    },
    firstView:{
        flexDirection:'row',
        // justifyContent:'space-between',
    },
    communicationView:{
        flexDirection:'row',
        // backgroundColor:'white',
        paddingHorizontal:scale(10),
        paddingVertical:verticalScale(7),
        borderRadius:moderateScale(40),
        marginRight:scale(10)
    },
  
    managementView:{
        flexDirection:'row',
        // backgroundColor:'white',
        paddingHorizontal:scale(10),
        paddingVertical:verticalScale(7),
        borderRadius:moderateScale(40),
        marginRight:scale(10),


},
text:{
    // color:'black',
    fontWeight:'900',
    fontSize:moderateScale(12.5)


}
})