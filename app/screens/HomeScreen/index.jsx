import React, { useState } from 'react'
import { Image, Platform, StatusBar, View } from 'react-native'

import AppButton from '../../components/AppButton'
import Navbar from '../../components/Navbar'

import { styles } from './style'

function HomeScreen({ navigation }) {
  const [currentData, setCurrentData] = useState([])

  const getDate = () => {
    var day = new Date().getDate()
    var month = new Date().getMonth()
    var year = new Date().getFullYear()
    var hours = new Date().getHours()
    var mins = new Date().getMinutes()

    var date = month + '/' + day + '/' + year

    if (mins < 10) {
      var minutes = '0' + mins
    } else {
      var minutes = mins
    }

    if (hours > 12) {
      var time = (hours % 12) + ':' + minutes + ' PM'
    } else {
      var time = hours + ':' + minutes + ' AM'
    }

    return { date, time }
  }

  const getDataX = () => {
    let tempCurrentData = [...currentData]
    tempCurrentData.unshift({ ...getDate(), ...{ type: 'Type X' } })

    setCurrentData(() => tempCurrentData)
  }

  const getDataY = () => {
    let tempCurrentData = [...currentData]
    tempCurrentData.unshift({ ...getDate(), ...{ type: 'Type Y' } })

    setCurrentData(() => tempCurrentData)
  }

  return (
    <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <Navbar navigation={navigation} />
      <View style={styles.body}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        <AppButton title='Record Tap X' onPress={getDataX} />
        <AppButton title='Record Tap Y' onPress={getDataY} />
        <AppButton
          title='View Table'
          color='tableButton'
          onPress={() =>
            navigation.navigate('TableScreen', {
              data: { currentData },
            })
          }
        />
      </View>
    </View>
  )
}

export default HomeScreen
