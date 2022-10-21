import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/header'
import Footer from '../../components/footer/Footer'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import InputField from '../../components/Input Fields/InputField'
import { useNavigation } from '@react-navigation/native'

const EditGoal = () => {
    const navigation=useNavigation();
    return (
        <View style={styles.mainView}>
            <View>
                <Header/>
                <Text style={styles.editGoalText}>Edit Goal</Text>
                <Text style={styles.steps}>Steps</Text>
                <Text style={styles.steps}>Edit your goal</Text>
                <InputField placeholder={'Complete UX Design Course'}/>



                <Text onPress={()=>navigation.navigate('calender')} style={styles.editGoalDate}>Click To Edit Goal Date</Text>
            </View>

            <View>
                <Footer iconName={'check'} />
            </View>
        </View>
    )
}

export default EditGoal

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-between',

    },
    editGoalText:{
        marginHorizontal:scale(20),
        color:'black',
        fontWeight:'bold',
        fontSize:moderateScale(25),
        marginTop:verticalScale(30)

    },
    steps: {
        color: 'black',
        fontSize: moderateScale(20),
        fontWeight: '500',
        marginHorizontal:scale(20),
        marginTop:verticalScale(15)

    },
    editGoalDate:{
        color:'black',
        textAlign:'right',
        marginHorizontal:scale(20),
        fontWeight:'500',
        // borderBottomWidth:1,
        // width:'50%'
    }
})