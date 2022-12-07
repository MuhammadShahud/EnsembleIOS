import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../screens/home/home';
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
  filledGoals,
  filledHome,
  filledSurvey,
  filledTeam,

} from '../../assets/images/images';
import {Image, StyleSheet} from 'react-native';
import PersonalGoals from '../screens/Goals/PersonalGoals';
import {verticalScale} from 'react-native-size-matters';

const TabStack = () => {
  const Tab = createMaterialBottomTabNavigator();

  let initialRoute = 'home';

  return (
    <Tab.Navigator
      barStyle={{backgroundColor: 'white', height: hp('8%')}}
      initialRouteName={initialRoute}
      
      >
        
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? filledHome : blackHome}
              style={styles.tabImageStyle}
            />
          ),
          tabBarAccessibilityLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Goals"
        component={PersonalGoals}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? filledGoals : blackGoals}
              style={styles.tabImageStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Surveys"
        component={Survey}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? filledSurvey : blackSurvey}
              style={styles.tabImageStyle}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Teams"
        component={Teams}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? filledTeam : blackTeams}
              style={styles.tabImageStyle}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabImageStyle: {
    // marginBottom:verticalScale(30)
    marginBottom: verticalScale(0),
  },
});

export default TabStack;
