import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
container: {
    backgroundColor: "white",
    height: hp('100%')
  },
  innerView: {
    width: wp('100%'),
justifyContent : 'center',
    alignItems: 'center',
  },
  imageStyle: {
    margin: wp("0%"),
    width: wp('100%'),
    height: hp('60%'),
  },
  imageStyle2: {
    width: wp('70%'),
    height: hp('20%'),
  },
  btn : {
    width: wp('80%'),    
  }
})