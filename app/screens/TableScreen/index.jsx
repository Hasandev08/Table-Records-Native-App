import React from 'react'
import { Platform, StatusBar, Text, View } from 'react-native'

import AppButton from '../../components/AppButton'
import Navbar from '../../components/Navbar'

import { styles } from './style'

function TableScreen({ navigation, route }) {
  const { data } = route.params

  return (
    <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <Navbar />
      <View style={styles.body}>
        <AppButton title='Save' />
        <AppButton title='Back' color='tableButton' onPress={() => navigation.navigate('Home')} />
        <Text>{data}</Text>
      </View>
    </View>
  )
}

export default TableScreen
