import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../screens/home/home';
import Goals from '../screens/Goals/goals';
import Survey from '../screens/survey/survey';
import Teams from '../screens/Teams/teams';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  blackGoals,
  blackHome,
  blackSurvey,
  blackTeams,
  greenHome,
  setting,
  tabGoal,
  tabSurvey,
  tabTeam,
} from '../../assets/images/images';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NewGoal from '../screens/Goals/NewGoal';
import PersonalGoals from '../screens/Goals/PersonalGoals';
import {GoalStack} from './MainStack';
import Settings from '../screens/settings/Settings';
import Review from '../screens/survey/Review';
import SurveySuceed from '../screens/survey/SurveySuceed';
import { verticalScale } from 'react-native-size-matters';

const TabStack = () => {
  const Tab = createMaterialBottomTabNavigator();

  let initialRoute = 'home';

  return (
    <Tab.Navigator
      barStyle={{backgroundColor: 'white', height: hp('8%')}}
      initialRouteName={initialRoute}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={blackHome} style={styles.tabImageStyle} />
          ),
        }}
      />
      <Tab.Screen
        name="Goals"
        component={PersonalGoals}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={blackGoals} style={styles.tabImageStyle} />
          ),
        }}
      />
      <Tab.Screen
        name="Surveys"
        component={Survey}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={blackSurvey} style={styles.tabImageStyle} />
          ),
        }}
      />
     
    
   
      <Tab.Screen
        name="Teams"
        component={Teams}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={blackTeams} style={styles.tabImageStyle} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabImageStyle: {
    // marginBottom:verticalScale(30)
    marginTop:verticalScale(-5)
  },
});

export default TabStack;
