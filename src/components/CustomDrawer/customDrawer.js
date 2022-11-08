import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {logout, drawerPP, drawerPT} from '../../../assets/images/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from '../../styles/GeneralStyle';
import {style} from '../Header/headerStyle';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = props => {
  const navigation = useNavigation()
  const filteredProps = {
    ...props,
    state: {
      ...props.state,
      routeNames: props.state.routeNames.filter(
        // To hide single option
        routeName => routeName !== 'Home',
      ),
      routes: props.state.routes.filter(route => route.name !== 'Home'),
    },
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F1F1F1', padding: wp('4%'), borderTopLeftRadius:16,borderBottomLeftRadius:16}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#F1F1F1'}}>
        <View style={{height: hp('4%')}}></View>
        <View style={[style.halfHeader, {justifyContent: 'flex-start',paddingLeft:wp('4%')}]}>
          <Image
            style={{marginRight: wp('3%')}}
            resizeMode="contain"
            source={drawerPT}
          />
          <Text style={[styles.large, style.companyName]}>
            The Plum Tree Group
          </Text>
        </View>

        <View style={{height: hp('4%')}}></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft:wp('4%')
          }}>
          <Image
            source={drawerPP}
            style={{borderRadius: 40, marginBottom: 10}}
          />
          <View style={{paddingLeft: wp('5%')}}>
            <Text
              style={{
                color: '#1B1B1B',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                fontSize: wp('5%'),
              }}>
              Bruce Wayne
            </Text>
            <Text
            onPress={()=>navigation.navigate('editprofile')}
              style={{
                color: '#1B1B1B',
                fontFamily: 'Poppins',
                fontWeight: '100',
                fontSize: wp('3%'),
              }}>
              View your profile
            </Text>
          </View>
        </View> 
         <View
          style={{
            flex: 1,
            backgroundColor: '#F1F1F1',
            paddingTop: 10,
            
          }}>
          <DrawerItemList {...filteredProps} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: wp('4%')}}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            paddingVertical: wp('4%'),
            borderWidth: 1,
            borderColor: '#2AB579',
            borderRadius: 38,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={logout} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins',
                marginLeft: 5,
                color: '#2AB579',
                fontWeight: 'bold',
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Poppins',
              color:'#000000'
            }}>
            Powered by
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins',
              fontWeight:'bold',
              color:'#000000'
            }}>
            Ensemble{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
