import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View,ScrollView } from 'react-native'
import React, { useState } from 'react'
import QuestionHeader from '../../components/Header/QuestionHeader'
import Footer from '../../components/footer/Footer'
import { useNavigation } from '@react-navigation/native'
import Questions from '../../components/Question Text/Questions'
import InputField from '../../components/Input Fields/InputField'
import { scale, verticalScale } from 'react-native-size-matters'
import Dashes from '../../components/Question Text/dashes'
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native'
import { FlashMessage } from '../../redux/Actions/AuthAction'

const DescribeYourJob = (props) => {
  const [desc, setDesc] = useState()
    let questions = props.route.params.questions;

    const navigation=useNavigation();

    const forward = () => {
      if(desc){
        console.log('Asdsadsadas', desc);
        questions.descKid = desc;
        console.log('questions', questions);
        navigation.navigate('achievements', {questions});
      }else{
        FlashMessage({
          message: "This field is required",
          type: 'danger',
        });
      }
      };
  return (
    <KeyboardAvoidingView style={styles.mainView} behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === 'ios'? 40 : 0}> 

            <QuestionHeader/>
            <Dashes color={4}/>
            <ScrollView>

            <View 
            // style={{justifyContent:'center',height:'75%'}}
            style={{marginTop:verticalScale(100)}}
            >
            <Questions title='How would you describe your job/role to a group of 5 years olds?'/>
            <InputField onChangeText={setDesc} inputStyle={styles.input} placeholder='“I give machines a brain to help them learn and be smarter.”'/>
        </View>
              </ScrollView>
        <View>
            <Footer powered={{color:'black'}} ensemble={{color:'black'}} iconName={'chevron-right'} onPress={()=>forward()}/>
        </View>
    </KeyboardAvoidingView>
  )
}

export default DescribeYourJob

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'space-between'
    },
    input:{
        paddingBottom:verticalScale(50),
        // width:'80%'
        // paddingHorizontal:scale(20)
    }
})