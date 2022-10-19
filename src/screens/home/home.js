import {View, Text, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {USER} from '../../redux/Reducers/AuthReducer';
import {style} from './homeStyle';
import {styles} from '../../styles/GeneralStyle';
import Header from '../../components/Header/header';
import {pp,task,medal,findPeople} from '../../../assets/images/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HomeBox from '../../components/HomeBox/homeBox';


export default function Home() {
  const userData = useSelector(USER);

  
  return (
    <View style={style.container}>
      <Header />

      <View style={style.innerView}>

        <View>
          <View style={style.hey}>
            <View>
              <Text style={style.morning}>Morning,</Text>
              <Text style={style.name}>Bruce Wayne</Text>
            </View>
            <Image source={pp} />
          </View>
          <View style={{height: hp('1%')}}></View>
          <Text>Product Designer | The Plum Tree Group </Text>
        </View>
      
        <View style={{height: hp('3%')}}></View>

<View>
  <Text style={style.overview}>Overview</Text>
  <View style={{height: hp('2%')}}></View>
<HomeBox 
navigate="teams"
image={findPeople}
text1='Find your collegues!'
text2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '/>
        <View style={{height: hp('2%')}}></View>

<HomeBox 
navigate="goals"
image={medal} text1='Set your Goals'
text2 = 'Create a goal from scratch or choose goals from the templates' />

        <View style={{height: hp('2%')}}></View>

<HomeBox 
navigate="surveys"
image={task} text1='Start your Pulse survey!'
text2 = 'Lorem Ipsum dolar sit Lorem Ipsum' color='#2AB679'/>
</View>
</View>
    </View>
  );
}
