import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header/header'
import { awardLogo, notiLogo, search, timeLogo } from '../../../assets/images/images'
import SearchInput from '../../components/Input Fields/SearchInput'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'


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


  return (
    <View style={styles.mainView}>
      <View>

        <Header source={notiLogo} />


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

      </View>
      <View style={styles.footerView}>
        <Text style={styles.powered}>Powered by</Text>
        <Text style={styles.ensemble}>ENSEMBLE</Text>
      </View>
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
    paddingVertical:verticalScale(25),
    backgroundColor:'white',
    alignItems:'center',
    marginVertical: verticalScale(20),
    marginHorizontal:scale(20),
    borderRadius:moderateScale(25),
    paddingHorizontal:scale(20)




  },
  Name: {
    color: 'black',
    fontWeight: '700',
    fontSize: moderateScale(20),
    paddingVertical: verticalScale(10),

  },
  position: {
    paddingBottom: verticalScale(15),
    color: 'black',

  },
  description: {
    color: '#4E4E4E',
  },
 












})