import { StyleSheet, Text, View } from 'react-native'
import QuestionHeader from '../../components/Header/QuestionHeader'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import InputField from '../../components/Input Fields/InputField'
import DropDown from '../../components/Input Fields/DropDown'
import Footer from '../../components/footer/Footer'


const Name = () => {
    return (
        <View style={styles.mainView}>
            <View>

            <QuestionHeader title='The Plum Tree Group' />
            <Text style={styles.text}>What is your preffered name?</Text>
            <InputField placeholderTextColor={'black'} placeholder={' "Michael Scott" '} inputStyle={styles.input} />
            <Text style={styles.pronounText}>What are your pronouns?</Text>
            </View>
            {/* <DropDown/> */}
            <View>

                <Footer iconName={'chevron-right'} />
            </View>
        </View>
    )
}

export default Name

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'space-between'
    },
    text: {
        color: 'black',
        fontSize: moderateScale(40),
        marginHorizontal: scale(20),
        fontWeight: 'bold'
    },
    input: {
        paddingBottom: verticalScale(10),
        paddingTop: verticalScale(10),
        marginHorizontal: scale(20),
        color: 'black',
        textAlignVertical: 'center'

    },
    pronounText: {
        color: 'black',
        marginHorizontal: scale(20),
        marginTop: verticalScale(20),
        fontSize: moderateScale(20),
        fontWeight: '700'
    }
})