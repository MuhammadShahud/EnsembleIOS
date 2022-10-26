import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QuestionHeader from '../../components/Header/QuestionHeader'
import Footer from '../../components/footer/Footer'
import { useNavigation } from '@react-navigation/native'
import Questions from '../../components/Question Text/Questions'
import InputField from '../../components/Input Fields/InputField'
import { moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { ButtonColor } from '../../../assets/colors/colors'
import Button from '../../components/Button'

const RetakePhoto = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.mainView}>
            <View>
                <QuestionHeader />

                <View style={styles.buttonView}>

                    <Button buttonStyle={styles.button} title={'Continue'} onPress={() => navigation.navigate('drawer')} />
                    <Button buttonStyle={styles.secondButton} title={'Retake'} />
                </View>
            </View>
            <View style={styles.footerView}>
                <Text style={styles.powered}>Powered by</Text>
                <Text style={styles.ensemble}>ENSEMBLE</Text>
            </View>
        </View>
    )
}

export default RetakePhoto

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor:'#F1F1F1'
    },
    input: {
        paddingBottom: verticalScale(50),
        // paddingHorizontal:scale(20)
    },
    footerView: {
        marginHorizontal: scale(20),
        marginBottom: verticalScale(20)
    },
    powered: {
        color: 'black',
    },
    ensemble: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: moderateVerticalScale(20)


    },
    buttonView: {
        marginTop: verticalScale(50),
    },
    button: {
        width: '85%',
        backgroundColor: ButtonColor,
        marginBottom: verticalScale(10)


    },
    secondButton: {
        color:'#505050',
        width: '85%',
        backgroundColor: '#F1F1F1',
        marginBottom: verticalScale(10)
    },
})