import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { ButtonColor } from '../../../assets/colors/colors'

const OngoingCompleted = () => {
    return (
        <View style={styles.view}>
            <View style={styles.container}>
                <View style={styles.ongoing}>

                    <Text style={styles.whiteText}>Ongoing</Text>
                </View>
                <View style={styles.completed}>
                    <Text style={styles.greyText}>Completed</Text>
                </View>
            </View>
        </View>
    )
}

export default OngoingCompleted

const styles = StyleSheet.create({
    view: {
        marginTop: verticalScale(30)
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: scale(20),
        },
    ongoing: {
        backgroundColor: ButtonColor,
        width: '50%',
        alignItems: 'center',
        borderBottomLeftRadius:30,
        borderTopLeftRadius:30,
        borderWidth:1,
        borderColor:ButtonColor

    },
    completed: {
        // backgroundColor:'blue',
        width: '50%',
        alignItems: 'center',
        borderWidth: 1,
        borderBottomRightRadius:30,
        borderTopRightRadius:30





    },
    whiteText: {
        color: 'white',
        paddingVertical: verticalScale(15)
    },
    greyText: {
        color: ButtonColor,
        paddingVertical: verticalScale(15),
        color:'#858585'



    }
})