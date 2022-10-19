import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Survey from '../screens/survey/survey';

import CustomDrawer from '../components/CustomDrawer/customDrawer';
import TabStack from './TabStack'
import { Image } from 'react-native';
import { fun, goals, people, profDev, resource, setting, survey } from '../../assets/images/images';
import NewGoal from '../screens/Goals/NewGoal';
import PersonalGoals from '../screens/Goals/PersonalGoals';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
      <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      useLegacyImplementation
      initialRouteName= 'Home'
      screenOptions={{
        headerShown: false,
        drawerBackgroundColor:'transparent',
        drawerActiveBackgroundColor: '#F1F1F1',
        drawerActiveTintColor: 'black',
        drawerPosition: "right",
        drawerInactiveTintColor: '#333',
        drawerStyle: {
            backgroundColor: 'transparent',
          },
        drawerLabelStyle: {
          marginLeft: -10,
          fontFamily: 'Poppins',
          fontSize: 14,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={TabStack}
       
      />
      <Drawer.Screen
        name="People"
        component={TabStack}
        options={{
          drawerIcon: ({color}) => (
       <Image source={people} style = {{height:21,width:21}}/>
          ),
        }}
      />
      <Drawer.Screen
        name="Goals"
        component={TabStack}
        options={{
          drawerIcon: ({color}) => (
            <Image source={goals} style = {{height:21,width:21}}/>
            ),
        }}
      />
      <Drawer.Screen
        name="Survey"
        component={TabStack}
        options={{
          drawerIcon: ({color}) => (
            <Image source={survey} style = {{height:21,width:21}}/>
            ),
        }}
      />
        <Drawer.Screen
        name="Resources"
        component={Survey}
        options={{
          drawerIcon: ({color}) => (
            <Image source={resource} style = {{height:21,width:21}}/>
            ),
        }}
      />
        <Drawer.Screen
        name="Fun stuff"
        component={Survey}
        options={{
          drawerIcon: ({color}) => (
            <Image source={fun} style = {{height:21,width:21}}/>
            ),
        }}
      />
        <Drawer.Screen
        name="Professional Development"
        component={Survey}
        options={{
          drawerIcon: ({color}) => (
            <Image source={profDev} style = {{height:21,width:21}}/>
            ),
        }}
      />
        <Drawer.Screen
        name="Settings"
        component={Survey}
        options={{
          drawerIcon: ({color}) => (
            <Image source={setting} style = {{height:21,width:21}}/>
            ),
        }}
      />
      
    </Drawer.Navigator>

  );
};

export default DrawerStack;