import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header/header'
import { awardLogo, notiLogo, search, timeLogo } from '../../../assets/images/images'
import SearchInput from '../../components/Input Fields/SearchInput'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ProfileButton from '../../components/ProfileButton'
import { ButtonColor } from '../../../assets/colors/colors'


const teams = () => {
  const team = [

    {
      id: 1,
      Name: 'Ahmed Akram',
      Position: 'TEAM LEAD',
      Description1: 'Lorem ipsum dolor sit amet',
      Description2: 'consectetur adipiscing elit',
      image: require('../../../assets/images/ahmed.png')
    },
    {
      id: 2,
      Name: 'Steven Tayler',
      Position: 'Senior Director',
      Description1: 'Lorem ipsum dolor sit amet',
      Description2: 'consectetur adipiscing elit',
      image: require('../../../assets/images/steven.png')

    },


    {
      id: 4,
      Name: 'Tena Mars',
      Position: 'Manager',
      Description1: 'Lorem ipsum dolor sit amet',
      Description2: 'consectetur adipiscing elit',
      image: require('../../../assets/images/ahmed.png')
    },
    {
      id: 3,
      Name: 'Charles Leclerc',
      Position: 'Team Principle',
      Description1: 'Lorem ipsum dolor sit amet',
      Description2: 'consectetur adipiscing elit',
      image: require('../../../assets/images/steven.png')

    },
  ]




  const colleague = [

    {
      id: 1,
      name: 'Ahmed Akram',
      Intrest: 'You both have similar intrest',
      image: require('../../../assets/images/akram.png'),
      Status: 'Online',
      newImage: require('../../../assets/images/new.png'),
      statusImage: require('../../../assets/images/online.png'),
      thunderImage: require('../../../assets/images/thunder.png')
    },
    {
      id: 2,
      name: 'Allison Fernandez',
      Status: 'Away',
      Intrest: 'You both have similar intrest',

      image: require('../../../assets/images/alison.png'),
      newImage: require('../../../assets/images/new.png'),
      statusImage: require('../../../assets/images/away.png'),
      thunderImage: require('../../../assets/images/thunder.png')



    },


    {
      id: 3,
      name: 'Jahanzaib Salman',
      Intrest: 'You both have similar intrest',
      image: require('../../../assets/images/jonathan.png'),
      Status: 'Accepted',
      statusImage: require('../../../assets/images/accepted.png'),
      thunderImage: require('../../../assets/images/thunder.png')

    },
    {
      id: 4,
      name: 'Jonathan',
      Intrest: 'You both have similar intrest',
      image: require('../../../assets/images/tena.png'),
      Status: 'Busy',
      statusImage: require('../../../assets/images/busy.png'),
      thunderImage: require('../../../assets/images/thunder.png')

    },
   

  ]



  return (
    <View style={styles.mainView}>

        <Header source={notiLogo} />
<ScrollView>


          <View style={styles.search}>

            <SearchInput placeholder='Search by name' source={search} />
          </View>

          <View>
            <Text style={styles.team}> My Team</Text>


            <FlatList
              style={styles.flatList}
              data={team}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.teamView}>


                    <Image source={item.image} />
                    <Text style={styles.Name}>{item.Name}</Text>
                    <Text style={styles.position}>{item.Position}</Text>
                    <Text style={styles.description}>{item.Description1}</Text>
                    <Text style={styles.description}>{item.Description2}</Text>
                  </View>

                );
              }}
            />
          </View>


          <View>
            <Text style={styles.colleague}>  Colleague </Text>


            <FlatList
              style={styles.flatList}
              data={colleague}
              keyExtractor={item => item.id}
              
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.teamView1}>

                    <View>

                      <Image source={item.image} />
                    </View>
                    <View style={styles.introView}>

                      <Image source={item.newImage} style={styles.newImage}/>
                      <Text style={styles.Name1}>{item.name}</Text>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={item.thunderImage}/>
                      <Text style={styles.intrest}>{item.Intrest}</Text>
                      </View>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={item.statusImage} style={{marginLeft:1}}/>
                      <Text style={styles.status}>{item.Status}</Text>
                      </View>
                    </View>
                    <ProfileButton/>
                  </View>

                );
              }}
            />



          </View>

      <View style={styles.footerView}>
        <Text style={styles.powered}>Powered by</Text>
        <Text style={styles.ensemble}>ENSEMBLE</Text>
      </View>
</ScrollView>
    </View>
  )
}

export default teams

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  footerView: {
    marginHorizontal: scale(20),
    marginBottom: verticalScale(20),

  },
  powered: {
    color: '#8C8C8C',
  },
  ensemble: {
    color: '#8C8C8C',
    fontWeight: 'bold',
    fontSize: moderateScale(18)
  },
  search: {
    marginTop: verticalScale(25)
  },
  team: {
    color: 'black',
    fontSize: moderateScale(20),
    fontWeight: '700',
    marginHorizontal: scale(20),
    marginTop: verticalScale(30)
  },
  flatList: {
    // backgroundColor:'yellow',


  },
  teamView: {
    paddingVertical: verticalScale(25),
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: verticalScale(15),
    marginHorizontal: scale(20),
    borderRadius: moderateScale(25),
    paddingHorizontal: scale(20)




  },
  Name: {
    color: 'black',
    fontWeight: '700',
    fontSize: moderateScale(20),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(5),

  },
  position: {
    paddingBottom: verticalScale(10),
    color: 'black',

  },
  description: {
    color: '#4E4E4E',
  },
  colleague: {
    color: 'black',
    fontWeight: '700',
    fontSize: moderateScale(20),
    marginHorizontal: scale(20),
    marginTop: verticalScale(10)
  },
  teamView1:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:scale(20),
    alignItems:'center',
    marginVertical:verticalScale(20)
  },
  button:{
    borderWidth:1,
    
  },
  Name1:{
    color:'black',
    fontWeight:'700',
    fontSize:moderateScale(15),
    marginHorizontal:scale(5)
  },
  intrest:{
    fontSize:moderateScale(10),
    marginHorizontal:scale(3)
  },
  status:{
    fontSize:moderateScale(10),
    marginHorizontal:scale(5),
    fontWeight:'500',
    color:'black'
  },
  newImage:{
    marginHorizontal:scale(5)
  },
  introView:{
    marginLeft:scale(10),
    marginRight:scale(20)
  }













})