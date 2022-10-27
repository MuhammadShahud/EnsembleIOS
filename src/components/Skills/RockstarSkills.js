import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { communication, management } from '../../../assets/images/images'
// import communication from '../../../assets/images/communication'

const RockstarSkills = (props) => {
  return (
    <View style={styles.mainView}>

    <View style={styles.firstView}>
        <TouchableOpacity style={styles.communicationView}>
            <Image source={props.firstImage}/>
            <Text style={styles.text}>{props.firstTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.managementView}>

        <Image source={props.secondImage}/>
        <Text style={styles.text}>{props.secondTitle}</Text>


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
        backgroundColor:'white',
        paddingHorizontal:scale(10),
        paddingVertical:verticalScale(7),
        borderRadius:moderateScale(40),
        marginRight:scale(10)
    },
  
    managementView:{
        flexDirection:'row',
        backgroundColor:'white',
        paddingHorizontal:scale(10),
        paddingVertical:verticalScale(7),
        borderRadius:moderateScale(40),
        marginRight:scale(10)


},
text:{
    color:'black',
    fontWeight:'900',
    fontSize:moderateScale(12.5)


}
})