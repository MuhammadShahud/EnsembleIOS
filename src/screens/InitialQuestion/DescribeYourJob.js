import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import QuestionHeader from '../../components/Header/QuestionHeader'
import Footer from '../../components/footer/Footer'
import { useNavigation } from '@react-navigation/native'
import Questions from '../../components/Question Text/Questions'
import InputField from '../../components/Input Fields/InputField'
import { scale, verticalScale } from 'react-native-size-matters'
import Dashes from '../../components/Question Text/dashes'

const DescribeYourJob = (props) => {
  const [desc, setDesc] = useState()
    let questions = props.route.params.questions;

    const navigation=useNavigation();

    const forward = () => {
        console.log('Asdsadsadas', desc);
        questions.descKid = desc;
        console.log('questions', questions);
        navigation.navigate('achievements', {questions});
      };
  return (
    <View style={styles.mainView}>
            <QuestionHeader/>
            <Dashes color={4}/>
            <View style={{justifyContent:'center',height:'75%'}}>
            <Questions title='How would you describe your job/role to a group of 5 years olds?'/>
            <InputField onChangeText={setDesc} inputStyle={styles.input} placeholder='“I give machines a brain to help them learn and be smarter.”'/>
        </View>
        <View>
            <Footer powered={{color:'black'}} ensemble={{color:'black'}} iconName={'chevron-right'} onPress={()=>forward()}/>
        </View>
    </View>
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