import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import QuestionHeader from '../../components/Header/QuestionHeader'
import Footer from '../../components/footer/Footer'
import { useNavigation } from '@react-navigation/native'
import Questions from '../../components/Question Text/Questions'
import RockstarSkills from '../../components/Skills/RockstarSkills'
import { communication, idea, leadership, management, profession, team, thinking } from '../../../assets/images/images'
import Dashes from '../../components/Question Text/dashes'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { PoppinsSemiBold } from '../../../assets/fonts/Fonts'
import { ButtonColor } from '../../../assets/colors/colors'
import InputField from '../../components/Input Fields/InputField'
import Entypo from 'react-native-vector-icons/Entypo'

const Skills = (props) => {
    const [btnState, setBtnState] = useState(false)
    const [btnTextColor, setBtnTextColor] = useState(false)
    const [show, setShow] = useState(false)

    const changeButtonColor = () => {
        setBtnState(!btnState)
    }
    const changeColor=()=>{
        setBtnState(!btnState)
        setShow(!show)


    }

    const navigation = useNavigation();
    return (
        <View style={styles.mainView}>
            <QuestionHeader />
            <Dashes color={4} />
            <View style={{ justifyContent: 'center', height: '75%' }}>
                <Questions title='What are your rockstar skills?' />
                <RockstarSkills firstTitle='COMMUNICATION' secondTitle='MANAGEMENT' firstImage={communication} secondImage={management} />
                <RockstarSkills firstTitle='PROBLEM SOLVING' secondTitle='PROFESSIONALISM' firstImage={idea} secondImage={profession} />
                <RockstarSkills firstTitle='CRITICAL THINKING' secondTitle='LEADERSHIP' firstImage={thinking} secondImage={leadership} />
                <RockstarSkills firstTitle='STRONG WORK ETHIC' secondTitle='TEAM WORK' firstImage={idea} secondImage={team} />

                <TouchableOpacity 
                // onPress={()=>setShow(true)} 
                onPress={changeColor}
                style={[styles.communicationView, { backgroundColor: btnState ? ButtonColor : 'white' }]}>
                    <Image />
                    <Text style={[styles.text, { color: btnTextColor ? 'white' : 'black' }]}>OTHERS</Text>
                </TouchableOpacity>
                {/* <InputField
                    placeholderTextColor={'#414141'}
                    placeholder={'Write other options here'}
                    inputStyle={styles.input}
                /> */}
           {show? <View style={styles.input}>


                <TextInput placeholderTextColor='#414141' value={props.value ? props.value : null} onChangeText={props.onChangeText ? (e) => props.onChangeText(e) : null} style={[styles.input, props.inputStyle]} placeholder='Write other option here..' />
                <TouchableOpacity style={styles.circleView} onPress={()=>setShow(false)}>

                <Entypo name='plus' size={20} color='white'/>
                </TouchableOpacity>
            </View>: null}


            </View>
            <View>
                <Footer powered={{ color: 'black' }} ensemble={{ color: 'black' }} iconName={'chevron-right'} onPress={() => navigation.navigate('enjoy')} />
            </View>
        </View>
    )
}

export default Skills

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-between'
    },
    communicationView: {
        flexDirection: 'row',
        // backgroundColor:'white',
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(7),
        borderRadius: moderateScale(40),
        marginHorizontal: scale(20),
        width: '20%',
        marginTop: verticalScale(10),
        marginBottom:verticalScale(15)
    },
    text: {
        // color:'yellow',
        // fontWeight:'900',
        fontFamily: PoppinsSemiBold,
        fontSize: moderateScale(12.5)


    },
    input: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        color: 'black',
        textAlignVertical: 'center',
        backgroundColor:'white',
        marginHorizontal:scale(20),
        borderRadius:moderateScale(25),
    },
    circleView:{
        backgroundColor:'#2AB679',
        borderRadius:moderateScale(20),
        marginRight:scale(10),
        height:verticalScale(30),
        width:scale(30),
        alignItems:'center',
        justifyContent:'center'
    }
})