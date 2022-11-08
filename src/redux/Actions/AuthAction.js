import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = data => {
  return {
    type: 'Login',
    load: data,
  };
};

export const Goals = data => {
  return {
    type: 'Goals',
    load: data,
  };
};

export const FlashMessage = data => {
  showMessage(data);
};

export const LoginFunction = (newObj, navigation, destination) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M');

      const response = await axios
        .post(`${state().AuthReducer.baseUrl}auth/signin`, newObj)
        .then(async res => {
          console.log('responssseee', res);

          await AsyncStorage.setItem('user', JSON.stringify(res.data));
          dispatch(Login(res.data));
          navigation.reset({
            index: 0,
            routes: [{name:destination}]

          });
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
    console.log('L');
    try {
      console.log('M');

      const response = await axios
        .post(`${state().AuthReducer.baseUrl}auth/forgetPass`, newObj)
        .then(async res => {
          console.log(res.data);
          dispatch(Login(res.data));
          navigation.navigate(destination, {
            forgetCode: res.data.forgetCode,
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
    console.log('L');
    try {
      console.log('M', newObj);

      const response = await axios
        .post(`${state().AuthReducer.baseUrl}auth/changePass`, newObj)
        .then(async res => {
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

export const PostGoal = (newObj, navigation, destination, token) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M', newObj);

      const response = await axios
        .post(`${state().AuthReducer.baseUrl}goals`, newObj, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async res => {
          console.log(res.data);
          navigation.navigate(destination);
        });
    } catch (err) {
      console.log(`Err in postGoal function: `, err.response.data);
      FlashMessage({
        message: err.errors,
        type: 'danger',
      });
    }
  };
};

export const GetGoals = (token) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M',token);

      const response = await axios
        .get(`${state().AuthReducer.baseUrl}goals`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        )
        .then(async res => {
          console.log(res.data);
          dispatch(Goals(res.data.result))
        });
    } catch (err) {
      console.log(`Err in getGoal function: `, err.response.data);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const PatchGoal = (newObj, navigation, destination, token,id,setVisible) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M', newObj);

      const response = await axios
        .patch(`${state().AuthReducer.baseUrl}goals/${id}`, newObj, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async res => {
          console.log(res.data);
          dispatch(GetGoals(token))
      setVisible? setVisible(true):
       navigation.navigate(destination);
        });
    } catch (err) {
      console.log(`Err in postGoal function: `, err.response.data);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};
