import { Image, Text, View } from 'react-native'
import { ensembleLogo, onBoardLogo } from '../../../assets/images/images'
import { boat } from '../../../assets/images/images'
import PrimaryButton from '../../components/PrimaryButton'
import { styles } from './splashStyle'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const navigation = useNavigation()

  const onStart = () => {
    console.log('working')
    // navigation.navigate('name')
    navigation.navigate('survey')
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Image
          style={styles.imageStyle2}
          resizeMode="contain"
          source={ensembleLogo}
        />
        <Image style={styles.imageStyle} source={boat} />
        <View style={styles.btn}>
          <PrimaryButton
            title="Let's Get Started"
            backgroundColor="#2B2F86"
            color="white"
            onPress={onStart}
          />
        </View>
      </View>
    </View>
  )
}

export default Splash
