import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts';

export const styles = StyleSheet.create({
container: {
    backgroundColor: "white",
    height: hp('100%'),
    flex:1,
    justifyContent:'space-between',
  },
  innerView: {
    width: wp('100%'),
justifyContent : 'center',
  },
  imageStyle: {
    margin: wp("0%"),
    width: wp('100%'),
    height: hp('60%'),
  },
  imageStyle2: {
    width: wp('50%'),
    // height: hp('10%'),
    marginTop:verticalScale(20),
    alignSelf:'center'
  },
  btn : {
    width: wp('80%'), 
    alignSelf:'center'  ,
    marginBottom:verticalScale(20),
    marginTop:verticalScale(10) 
  },
  boxView:{
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'center',
    // alignSelf:'center',
    // width:'100%',
    backgroundColor: 'rgba(144, 148, 235, 0.1)',
    // paddingHorizontal:scale(40),
    paddingVertical:verticalScale(17),
    // borderRadius:moderateScale(20),
    marginVertical:verticalScale(7),
    marginHorizontal:scale(20),
    borderRadius:moderateScale(20),
    borderWidth:1,
    borderColor:'#CACACA'
  },
  setGoals:{
    color:'black',
    fontFamily:PoppinsSemiBold,
    fontSize:moderateScale(18),
    paddingLeft:scale(10)
  },
  monthly:{
    color:'black',
    // fontFamily:PoppinsRegular,
    paddingLeft:scale(10),
    fontSize:moderateScale(10),

    

  },
  company:{
    color:'black',
    // fontFamily:PoppinsRegular,
    paddingLeft:scale(10),
    fontSize:moderateScale(10),

  },
  imageView:{
    marginLeft:scale(20),
    marginRight:scale(20)
  },
  flatListCompleted:{
    // marginTop:verticalScale(170)
  },
  lootie:{
    // height:'10%'
    marginTop:verticalScale(-170)

    // marginTop:verticalScale(50)
  },
  flatlistView:{
    marginTop:verticalScale(170)
  }
})