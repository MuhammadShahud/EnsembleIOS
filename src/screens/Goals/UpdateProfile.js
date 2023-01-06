// import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
// import React from 'react';
// import Picture from '../../../assets/images/picture'
// import EditDetails from '../../components/EditDetails/EditDetails';
// import EditProfileButton from '../../components/EditProfileButton'
// import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
// import { PoppinsSemiBold } from '../../../assets/fonts/Fonts';



// const UpdateProfile = () => {
//     // const userData = props.route.params.userData;




//     return (
//         <View>
//             <Picture />
//             <EditProfileButton edit={'null'} onPress={() => navigation.navigate('updateprofile')} EditText={'Update'} />
//             <View style={styles.inputView}>

//                 <Text style={styles.text}>Phone Number</Text>
//                 <View style={styles.inputFieldView}>


//                     <TextInput
//                         style={styles.inputField}
//                         placeholder="0213 456 789"
//                     />
//                 </View>
//                 <View style={{ width: '200%', height: '1%', backgroundColor: '#E0E0E0', marginTop: verticalScale(20) }}>

//                 </View>

//             </View>
//         </View>
//     )
// }

// export default UpdateProfile

// const styles = StyleSheet.create({

//     inputFieldView: {
//         backgroundColor: 'white',
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginHorizontal: scale(20),
//         justifyContent: 'space-between',
//         borderRadius: moderateScale(20),
//         paddingHorizontal: scale(20),
//         marginTop: verticalScale(3),
//         marginBottom: verticalScale(10)
//     },
//     text: {
//         color: 'black',
//         fontSize: moderateScale(18),
//         fontFamily: PoppinsSemiBold,
//         marginHorizontal: scale(20)
//     },
//     inputView: {
//         marginTop: verticalScale(30)
//     }


// })




import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { add, edit, editPicture, notiLogo } from '../../../assets/images/images'
import Header from '../../components/Header/header'
import EditDetails from '../../components/EditDetails/EditDetails'
import EditButtons from '../../components/EditDetails/EditButtons'
import { useSelector } from 'react-redux'
import { COMPANY, USER } from '../../redux/Reducers/AuthReducer'
import { PoppinsRegular, PoppinsSemiBold } from '../../../assets/fonts/Fonts'
import EditProfileButton from '../../components/EditProfileButton'
import { useNavigation } from '@react-navigation/native'
import UpdateInput from '../../components/UpdateInput'

const EditProfile = (props) => {
    const navigation = useNavigation();

    const userData = props.route.params.userData;
    const company = useSelector(COMPANY)
    console.log('userData', userData);


    return (
        <View style={styles.mainView}>

            <Header source={notiLogo} />
            <ScrollView >
                <View>
                    <View style={{ flexDirection: 'row' }}>

                        <Image source={{ uri: `https://onboard-backendd.herokuapp.com/${userData.profilePic}` }} style={styles.editImage} />

                        <EditDetails detail1={userData.questions.jobTitle} detail2={company?.companyName} title={userData.name} source={edit} name='kuchbhi' />
                    </View>
                    <EditProfileButton onPress={() => navigation.navigate('updateprofile')} EditText={'Update'} edit={'hehe'} />
                    <UpdateInput placeholder={'021 456 789'} title={'Phone Number'} />
                    <UpdateInput placeholder={'Pakistan'} title={'Location'} />
                    
                    <EditButtons cross={'aa'} input={'showInput'} addIcon={'aa'} title='Tools' addImage={add} properties={['Adobe XD', 'Miro', 'Illustrator', 'Figma', 'Photoshop']} />
                    <EditButtons cross={'aa'} input={'showInput'} addIcon={'aa'} title='Rockstar Skills' addImage={add} properties={userData.questions.rockstarSkills} />
                    <EditButtons cross={'aa'} input={'showInput'} addIcon={'aa'} title='When you are not working, what do you enjoy doing the most?' addImage={add} properties={userData.questions.Hobbies} />
                    <UpdateInput placeholder={'Lorem ipsum dolor sit amet'} title={'How Would you describe job to the group of 5 years old?'} />
                    <UpdateInput placeholder={'Lorem ipsum dolor sit amet'} title={'What is ONE of the coolest things you have ever done?'} line={'aa'} />

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
        // marginHorizontal:scale(20)
    },
    footerView: {
        marginHorizontal: scale(20),
        marginBottom: verticalScale(40),

        marginTop: verticalScale(50)
    },
    powered: {
        color: 'black',
        fontFamily: PoppinsRegular
    },
    ensemble: {
        color: 'black',
        // fontWeight: 'bold',
        fontFamily: PoppinsSemiBold,
        fontSize: moderateScale(20),
        marginTop: verticalScale(-5)


    },
    editImage: {
        marginTop: verticalScale(20),
        marginHorizontal: scale(20),
        width: scale(130),
        height: verticalScale(130),
        overflow: 'hidden',
        borderRadius: moderateScale(65),


    }
})











