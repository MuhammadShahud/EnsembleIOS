import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = data => {
      return {
        type: 'Login',
        load: data,
      };
    };



    export const FlashMessage = data => {
      showMessage(data);
    };


    export const LoginFunction = (newObj, navigation, destination,) => {
      return async (dispatch, state) => {
            console.log("L");
        try {
            console.log("M");

          const response = await axios.post(
            `${state().AuthReducer.baseUrl}auth/signin`,
            newObj
          ).then(async(res)=>{
            console.log("responssseee",res);

            await AsyncStorage.setItem('user', JSON.stringify(res.data));
            dispatch(Login(res.data));
            navigation.navigate(destination);

          });
          } catch (err) {
          console.log(`Err in login function: `, err.response);
          FlashMessage({
            message: err.error,
            type: 'danger',
          });
        }
      };
    };

    export const ForgetPass = (newObj, navigation, destination) => {
      return async (dispatch, state) => {
            console.log("L");
        try {
            console.log("M");

          const response = await axios.post(
            `${state().AuthReducer.baseUrl}auth/forgetPass`,
            newObj
          ).then(async(res)=>{
            console.log(res.data);
            dispatch(Login(res.data));
            navigation.navigate(destination,{
              forgetCode: res.data.forgetCode
            });

          });
          } catch (err) {
          console.log(`Err in login function: `, err);
          FlashMessage({
            message: err.error,
            type: 'danger',
          });
        }
      };
    };

    export const ResetPass = (newObj, setModalOpen) => {
      return async (dispatch, state) => {
            console.log("L");
        try {
            console.log("M",newObj);

          const response = await axios.post(
            `${state().AuthReducer.baseUrl}auth/changePass`,
            newObj
          ).then(async(res)=>{
            console.log(res.data);

setModalOpen(true);
          });
          } catch (err) {
          console.log(`Err in resetPass function: `, err.response.data);
          FlashMessage({
            message: err.errors,
            type: 'danger',
          });
        }
      };
    };