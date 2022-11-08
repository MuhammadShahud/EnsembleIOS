import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

import { add, edit, editPicture, notiLogo } from '../../../assets/images/images'
import Header from '../../components/Header/header'
import EditDetails from '../../components/EditDetails/EditDetails'
import EditButtons from '../../components/EditDetails/EditButtons'

const EditProfile = () => {
    return (
        <View style={styles.mainView}>

                <Header source={notiLogo} />
            <ScrollView >
                <Image source={editPicture} style={styles.editImage} />
                <View>

                    <EditDetails  detail1='Product Designer' detail2='Plum Tree Group' title='Bruce Wayne' source={edit} />
                    <EditDetails detail1='0123 456 789'  title='Phone Number' source={edit} />
                    <EditDetails detail1='6 july 1992' title='Date Of Birth' source={edit} />
                    <EditDetails detail1='Scranton , Pennsylvania'  title='Location' source={edit} />
                    <EditDetails detail1='Lorem ipsum dolor sit amet. In impedit aliquid nam minima iure At quas obcaecati aut iste eveniet ut voluptates expedita. Quo asperiores.' title='Describe Yourself in 3 Words' source={edit} />
                    {/* <EditDetails detail1='Lorem ipsum dolor sit amet. In impedit aliquid nam minima iure At quas obcaecati aut iste eveniet ut voluptates expedita. Quo asperiores.' title='Describe Yourself in 3 Words' source={edit} /> */}
                    <EditButtons title='Tools' addImage={add} button1={'Figma'} button2={'Adobe XD'} button3={'Miro'} button4={'Illustrator'} button5={'Photoshop'}/>
                    <EditButtons title='Rockstar Skills' addImage={add} button1={'Communication'} button2={'Problem Solving'} button3={'Collaboration'} button4={'Emotional Intelligence'} button5={'Leadership'}/>
                    <EditButtons title='What you enjoy doing the most?'  addImage={add} button1={'Photography'} button2={'Networking'} button3={'Gaming'} button4={'Reading'} button5={'Photoshop'}/>
                    <EditDetails detail1='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' title='How Would you describe job?' source={edit} />
                    <EditDetails detail1='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' title='What is ONE of the coolest things?' source={edit} />
                   

                </View>
            <View style={styles.footerView}>
                <Text style={styles.powered}>Powered by</Text>
                <Text style={styles.ensemble}>ENSEMBLE</Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-between',
        // marginBottom:20
        // marginHorizontal:scale(20)
    },
    footerView: {
        marginHorizontal: scale(20),
        marginBottom: verticalScale(40),

        marginTop:verticalScale(50)
    },
    powered: {
        color: '#8C8C8C',
    },
    ensemble: {
        color: '#8C8C8C',
        fontWeight: 'bold',
        fontSize: moderateScale(20)


    },
    editImage: {
        marginTop: verticalScale(20),
        marginHorizontal:scale(20)
    }
})