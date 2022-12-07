import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header/header'
import { halfloading, sketch } from '../../../assets/images/images'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { InterBold, InterRegular } from '../../../assets/fonts/Fonts'
import Footer from '../../components/footer/Footer'

import { useNavigation } from '@react-navigation/native'
import { Checkbox } from 'react-native-paper';
import { ButtonColor } from '../../../assets/colors/colors'
import BouncyCheckbox from "react-native-bouncy-checkbox";





const Review = () => {
    // const [checked, setChecked] = React.useState(0);
    // const [checked, setChecked] = React.useState(0);

    




    const navigation = useNavigation();
    return (
        <View style={styles.mainView}>
            <View>

                <Header />
                <View style={styles.sketch}>

                    <Image source={sketch} />
                </View>
                <Text style={styles.text}>My organization takes measures to attract diverse talent.</Text>




                <View style={styles.checkboxView}>

                    <View>

                        {/* <Checkbox
                            status={checked === 1 ? 'checked' : 'unchecked'}
                            color={ButtonColor}

                            onPress={() => {
                                setChecked(1);
                            }}
                        /> */}

                        <BouncyCheckbox
                          
                            style={styles.checkBox}
                            size={25}
                            fillColor="#2AB679"
                            innerIconStyle={{ borderWidth: 2, borderColor: '#808080' }}
                        //   onPress={(isChecked: boolean) => {}}
                      
                     
                        />



                        <Text style={styles.text1}>Strongly </Text>
                        <Text style={styles.text1}>Disagree </Text>

                    </View>
                    <View>

                      

                        <BouncyCheckbox
                        
                            
                            style={styles.checkBox}
                            size={25}
                            fillColor='#2AB679'
                            innerIconStyle={{ borderWidth: 2, borderColor: '#808080' }}
                        //   onPress={(isChecked: boolean) => {}}
                       
                        />
                        <Text style={styles.text1}>Disagree </Text>

                    </View>
                    <View>

                      
                        <BouncyCheckbox
                            style={styles.checkBox}
                            size={25}
                            fillColor="#2AB679"
                            innerIconStyle={{ borderWidth: 2, borderColor: '#808080' }}
                        //   onPress={(isChecked: boolean) => {}}
                      
                        />
                        <Text style={styles.text1}>Neutral </Text>

                    </View>

                    <View>

                       
                        <BouncyCheckbox
                            style={styles.checkBox}
                            size={25}
                            fillColor="#2AB679"
                            innerIconStyle={{ borderWidth: 2, borderColor: '#808080' }}
                        //   onPress={(isChecked: boolean) => {}}

                       
                        />
                        <Text style={styles.text1}>Agree </Text>

                    </View>

                    <View>

                     
                        <BouncyCheckbox
                            style={styles.checkBox}
                            size={25}
                            fillColor="#2AB679"
                            innerIconStyle={{ borderWidth: 2, borderColor: '#808080' }}
                           
                        //   onPress={(isChecked: boolean) => {}}
                        />
                        <Text style={styles.text1}>Strongly </Text>
                        <Text style={styles.text1}>Agree </Text>

                    </View>


                </View>







            </View>
            <View>
                <Footer iconName={'chevron-right'} powered={{ color: '#8C8C8C' }} ensemble={{ color: '#8C8C8C' }} onPress={() => navigation.navigate('surveysuceed')} />
            </View>
        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-between'
    },
    sketch: {
        alignSelf: 'center',
        marginVertical: verticalScale(60)
    },
    text: {
        fontFamily: InterBold,
        color: 'black',
        marginHorizontal: scale(20),
        fontSize: moderateScale(24),
        marginTop:verticalScale(15)
    },
    loadingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scale(20)
    },
    loadingText: {
        color: '#616161',
        fontFamily: InterRegular,
        fontSize: moderateScale(16)
    },
    checkboxView: {
        flexDirection: 'row',
        marginHorizontal: scale(20),
        justifyContent: 'space-between',
        marginVertical: verticalScale(25)
    },
    text1: {
        fontFamily: InterRegular,
        color: '#616161'
    },
    checkBox:{
        marginBottom:verticalScale(10),
        alignSelf:'center'
    }









    // container: {
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center",
    //   },
    //   checkboxContainer: {
    //     flexDirection: "row",
    //     marginBottom: 20,
    //   },
    //   checkbox: {
    //     alignSelf: "center",
    //   },
    //   label: {
    //     margin: 8,
    //   },


})