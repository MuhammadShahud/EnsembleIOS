import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import SetGoals from '../../components/Goals/SetGoals'
import OngoingCompleted from '../../components/Goals/OngoingCompleted'
import Header from '../../components/Header/headerNotification'
import RBSheet from 'react-native-raw-bottom-sheet';
import { useRef } from 'react';


import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { awardlogo, loadingLine, timelogo } from '../../../assets/images/images'
const PersonalGoals = () => {
  const navigation = useNavigation()
  const [show, setShow] = useState(true)
  const refRBSheet = useRef();
  const height = Dimensions.get('screen').height;

  useEffect(() => {
    refRBSheet.current.open()


  }, [])



  const data = [

    {
      id: 1,
      title: 'Complete UX Design Course',
      date: '8 Dec, 2022',
    },
    {
      id: 2,
      title: 'Complete Figma Introduction',
      date: '10 Jan, 2023',
    },

    {
      id: 3,
      title: 'What A Design Movie',
      date: '20 Jan, 2023',
    },
    {
      id: 4,
      title: 'Read Design Article',
      date: '25 Jan, 2023',
    },
    {
      id: 5,
      title: 'Frontend Developer',
      date: '10 July, 2023',
    },
    {
      id: 6,
      title: 'Backend Developer',
      date: '10 July, 2023',
    },
  ]


  return (
    <View style={styles.mainView}>
      <View>

        <Header />
        <SetGoals />
        <OngoingCompleted />
      </View>
      <Text style={styles.personalText}>Personal Goals</Text>
      

      <FlatList
        style={styles.flatList}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.box}>

              <View style={styles.imageView}>
                <Image source={awardlogo} />
              </View>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.dateView}>

                  <Image source={timelogo} />
                  <Text style={styles.date}>{item.date}</Text>
                </View>
                <Image style={styles.loadingline} source={loadingLine} />
              </View>
            </View>
          );
        }}
      />

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
            width: '40%',
            marginTop: verticalScale(15)
          },
          container: {
            backgroundColor: 'white',
            borderTopLeftRadius: moderateScale(45),
            borderTopRightRadius: moderateScale(45),
            paddingHorizontal: scale(20),
            zIndex: 1,
          },
        }}
        height={height * 0.35}>
        <View style={styles.bottomsheet}>

          <Text style={styles.georgeText}>Ahoy, George!</Text>
          <Text style={styles.goalsText}>What are <Text style={styles.smartText}>S.M.A.R.T</Text> Goals</Text>
          <Text style={styles.goalParagraph}>A SMART goal is used to help guide goal setting. SMART is an acronym that stands for <Text style={styles.oneword}>S</Text>pecific, <Text style={styles.oneword}>M</Text>easurable, <Text style={styles.oneword}>A</Text>chievable, <Text style={styles.oneword}>R</Text>ealistic, and <Text style={styles.oneword}>T</Text>imely. </Text>
          <Button title={'Lets Go'} buttonStyle={styles.button} onPress={() => refRBSheet.current.close()} />
        </View>
      </RBSheet>


    </View>
  )
}

export default PersonalGoals

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // backgroundColor:'white'
  },
  personalText: {
    color: 'black',
    marginHorizontal: scale(20),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
    fontSize: moderateScale(20),
    fontWeight: 'bold'
  },

  box: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: verticalScale(7),
    borderRadius: moderateScale(20),
    marginHorizontal: scale(20),
    
  },
  title: {
    color: 'black',
    fontSize: moderateScale(17),
    fontWeight: 'bold',
    paddingTop: verticalScale(10)
  },
  date: {
    color: 'black',
    paddingLeft: scale(8)

  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),

  },
  imageView: {
    paddingTop: verticalScale(10),
  },
  flatList: {
    marginBottom: verticalScale(20)
  },
  loadingline: {
    marginTop: verticalScale(5)
  },
  georgeText: {
    marginTop: verticalScale(10),
    fontSize: moderateScale(40),
    color: 'black',
    fontWeight: 'bold'

  },
  smartText: {
    color: 'black',
    fontWeight: 'bold'
  },
  goalsText: {
    color: 'black',
    marginTop: verticalScale(5)
  },
  goalParagraph: {
    marginTop: verticalScale(10),
    color: 'black',
    fontSize: moderateScale(14),
    lineHeight: verticalScale(15)
  },
  bottomsheet: {
    marginHorizontal: scale(5)
  },
  oneword: {
    fontWeight: 'bold',

  },
  button: {
    backgroundColor: 'black',
    borderRadius: moderateScale(30),
    width: '100%',
    paddingVertical: verticalScale(10)
  },
  sheetContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: moderateScale(45),
    borderTopRightRadius: moderateScale(45),
    paddingHorizontal: scale(20),
    zIndex: 1,
  }
})