import React from 'react';
import Splash from '../screens/splash/Splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/login';
import DrawerStack from './DrawerStack';
import TabStack from './TabStack';
import VerifyEmail from '../screens/login/VerifyEmail';
import VerificationCode from '../screens/login/VerificationCode';
import ResetPassword from '../screens/login/ResetPassword';
import NewGoal from '../screens/Goals/NewGoal';
import SuccessGoal from '../screens/Goals/SuccessGoal';
import PersonalGoals from '../screens/Goals/PersonalGoals';
import Calen from '../screens/Goals/Calender';
import Footer from '../components/footer/Footer';
import DiscoverGoals from '../screens/Goals/DiscoverGoals';
import GoalsDueDate from '../screens/Goals/GoalsDueDate';
import EditGoal from '../screens/Goals/EditGoal';

const Main = createNativeStackNavigator();
const Goal = createNativeStackNavigator();
const Auth = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Main.Navigator
      initialRouteName="auth"
      headerMode="none"
      options={{
        animationEnabled: false,
      }}>
      <Main.Screen
        name="auth"
        component={AuthStack}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="tab"
        component={TabStack}
        options={{headerShown: false}}
        
      />
      <Main.Screen
        name="drawer"
        component={DrawerStack}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="newGoal"
        component={NewGoal}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="personalgoals"
        component={PersonalGoals}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="successGoal"
        component={SuccessGoal}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="calender"
        component={Calen}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="footer"
        component={Footer}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="discovergoals"
        component={DiscoverGoals}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="duedate"
        component={GoalsDueDate}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="editgoal"
        component={EditGoal}
        options={{headerShown: false}}
      />
    </Main.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Auth.Navigator
      initialRouteName="splash"
      headerMode="none"
      options={{
        animationEnabled: false,
      }}>
      <Auth.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="verifyemail"
        component={VerifyEmail}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="verificationcode"
        component={VerificationCode}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="resetpassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
    </Auth.Navigator>
  );
};


export default MainStack;
