import { StyleSheet, Text, TextInput, View } from 'react-native'
import { RadioButton } from 'react-native-paper';
import * as React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/footer/Footer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native';

const NewGoal = () => {
    const navigation=useNavigation()
    const [checked, setChecked] = React.useState('first');
    return (
        <View style={styles.mainView}>
            <View>
                <Header />
                <View style={styles.firstView}>

                    <Text style={styles.goal}>Set a New Goal</Text>
                    <Text style={styles.setGoal}>Let set your new goal</Text>
                    <TextInput style={styles.input} placeholder='Type your new goal...' />
                    <Text style={styles.planText}>Plan the steps to achieve your goal</Text>
                </View>
                <View style={styles.stepView}>

                    <View style={styles.radioView}>
                        <RadioButton
                            color='black'
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        <Text style={styles.step}>Add Step One</Text>

                    </View>

                    <View style={styles.radioView}>
                        <RadioButton
                            color='black'
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Text style={styles.step}>Add Step two</Text>

                    </View>
                    <View style={styles.icon}>

                        <Ionicons name='add-circle'
                            size={25}
                            color='black'
                        />

                        <Text style={styles.anotherstep}>Add another step</Text>
                    </View>

                </View>


                <View>
                </View>
            </View>
            <View>
                <Footer onPress={()=>navigation.navigate('calender')} iconName={'chevron-right'}/>
                </View>

        </View>
    )
}

export default NewGoal

const styles = StyleSheet.create({
    mainView:{
        flex:1,
justifyContent:'space-between'
    },
    goal: {
        color: 'black',
        fontSize: moderateScale(20),
        fontWeight: 'bold',
        paddingHorizontal: scale(20)

    },
    firstView: {
        marginTop: verticalScale(70)
    },
    setGoal: {
        color: 'black',
        paddingHorizontal: scale(20)
    },
    input: {
        // paddingHorizontal:scale(20),
        borderWidth: 1,
        backgroundColor: 'white',
        marginHorizontal: scale(20),
        borderColor: 'white',
        borderRadius: moderateScale(15),
        paddingLeft: scale(20),
        height:'35%',
        // paddingVertical: scale(30),
        // height:verticalScale(100),
        marginTop: verticalScale(10),
        textAlignVertical: 'top'


    },
    planText: {
        marginTop: verticalScale(20),
        color: 'black',
        fontSize: moderateScale(25),
        fontWeight: 'bold',
        paddingHorizontal: scale(20)
    },
    radioView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: scale(20),
    },
    step: {
        color: 'black'
    },
    stepView: {
        marginTop: verticalScale(20)
    },
    icon: {
        flexDirection: 'row',
        marginHorizontal: scale(25),
        alignItems: 'center',
        marginTop: verticalScale(5)


    },
    anotherstep: {
        color: 'black',
        paddingLeft: scale(5),
    }
})