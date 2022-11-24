import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header/header'
import { halfloading, sketch } from '../../../assets/images/images'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { InterBold, InterRegular } from '../../../assets/fonts/Fonts'
import Footer from '../../components/footer/Footer'
import { useNavigation } from '@react-navigation/native'

const Review = () => {
    const navigation=useNavigation();
    return (
        <View style={styles.mainView}>
            <View>

                <Header />
                <View style={styles.sketch}>

                    <Image source={sketch} />
                </View>
                <Text style={styles.text}>I am inspired by the purpose and mission of my organization.</Text>
                <Image style={{ alignSelf: 'center' }} source={halfloading} />
                <View style={styles.loadingView}>
                    <Text style={styles.loadingText}>Not at all</Text>
                    <Text style={styles.loadingText}>Absolutely</Text>
                </View>
            </View>
            <View>
                <Footer iconName={'chevron-right'} powered={{color:'#8C8C8C'}} ensemble={{color:'#8C8C8C'}} onPress={()=>navigation.navigate('surveysuceed')}/>
            </View>
        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'space-between'
    },
    sketch: {
        alignSelf: 'center',
        marginVertical: verticalScale(70)
    },
    text: {
        fontFamily: InterBold,
        color: 'black',
        marginHorizontal: scale(20),
        fontSize: moderateScale(24)
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
    }
})