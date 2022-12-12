import {View, Text, Image} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {USER} from '../../redux/Reducers/AuthReducer';
import {style} from './homeStyle';
import {styles} from '../../styles/GeneralStyle';
import Header from '../../components/Header/header';
import {
  pp,
  task,
  medal,
  findPeople,
  notiLogo,
} from '../../../assets/images/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HomeBox from '../../components/HomeBox/homeBox';
import {GetCompany, GetGoals, GetNoti, GetSurveys, GetTeam} from '../../redux/Actions/AuthAction';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';


export default function Home() {
  const userData = useSelector(USER);
  const dispatch = useDispatch();
  const navigation =useNavigation();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWh1ZEBwbHVtdHJlZWdyb3VwLm5ldCIsImlhdCI6MTY2NDU2NzExNSwiZXhwIjoxNjk2MTAzMTE1fQ.bG940Pi5-Tf6CX4AMxLSZ2vLHZJr3XfgkBsIRvtkNeA';


    useEffect(() => {
      // Assume a message-notification contains a "type" property in the data payload of the screen to open
  
      messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        remoteMessage.data.type === "Surveys"? dispatch(GetSurveys()) : null
        
        remoteMessage.data.type? navigation.navigate(remoteMessage.data.type): null;
      });
  
      // Check whether an initial notification is available
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log(
              'Notification caused app to open from quit state:',
              remoteMessage.notification,
            );
            remoteMessage.data.type? navigation.navigate(remoteMessage.data.type): null;
          }
        });
    }, []);
    
  useFocusEffect(
    useCallback(() => {
       dispatch(GetGoals(token));
       dispatch(GetCompany(userData?.companyId));
       dispatch(GetTeam(userData?.teamId));
       dispatch(GetSurveys())
       dispatch(GetNoti());

    }, []),
  );

  return (
    <View style={style.container}>
      <Header source={notiLogo} title='The Plum Tree Group' />

      <View style={style.innerView}>
        <View>
          <View style={style.hey}>
            <View>
              <Text style={style.morning}>Morning,</Text>
              <Text style={style.name}>{userData?.name}</Text>
            </View>
            <Image
              source={{
                uri: `https://onboard-backendd.herokuapp.com/${userData?.profilePic}`,
              }}
              style={{borderRadius: 32,height:64, width:64}}

            />
          </View>
          <View style={{height: hp('0%')}}></View>
          <Text style={style.position}>{userData?.questions.jobTitle} | The Plum Tree Group </Text>
        </View>

        <View style={{height: hp('3%')}}></View>

        <View>
          <Text style={style.overview}>Overview</Text>
          <View style={{height: hp('2%')}}></View>
          <HomeBox
            navigate="Teams"
            image={findPeople}
            text1="Find your collegues!"
            text2="Search your colleagues and get connected now "
          />
          <View style={{height: hp('2%')}}></View>

          <HomeBox
            navigate="Goals"
            image={medal}
            text1="Set your Goals"
            text2="Create a goal from scratch or choose 
            goals from the templates"
          />

          <View style={{height: hp('2%')}}></View>

          <HomeBox
            navigate="Surveys"
            image={task}
            text1="Start your Pulse survey!"
            text2="Answer these pulse survey questions anonymously"
            color="#2AB679"
          />
        </View>
      </View>
    </View>
  );
}
