import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QuestionHeader from '../../components/Header/QuestionHeader'
import Footer from '../../components/footer/Footer'
import { useNavigation } from '@react-navigation/native'

const Skills = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.mainView}>
        <View>
            <QuestionHeader/>
        </View>
        <View>
            <Footer powered={{color:'black'}} ensemble={{color:'black'}} iconName={'chevron-right'} onPress={()=>navigation.navigate('enjoy')}/>
        </View>
    </View>
  )
}

export default Skills

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'space-between'
    }
})