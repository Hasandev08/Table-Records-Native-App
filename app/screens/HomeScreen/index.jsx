import React, { useEffect, useState } from 'react'
import { Image, Platform, StatusBar, Text, View } from 'react-native'

import AppButton from '../../components/AppButton'
import Navbar from '../../components/Navbar'

import { styles } from './style'

function HomeScreen({ navigation }) {
  // const [currentDate, setCurrentDate] = useState('')
  // const [currentTime, setCurrentTime] = useState('')
  const [currentData, setCurrentData] = useState({})

  const getData = () => {
    var day = new Date().getDate()
    var month = new Date().getMonth()
    var year = new Date().getFullYear()
    var hours = new Date().getHours()
    var mins = new Date().getMinutes()

    var date = month + '/' + day + '/' + year
    var time = hours + ':' + mins

    setCurrentData([date, time])
    console.log(currentData)

    // setCurrentDate(month + '/' + date + '/' + year)
    // setCurrentTime(hours + ':' + mins)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <Navbar />
      <View style={styles.body}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        <AppButton title='Record Tap X' onPress={getData} />
        <AppButton title='Record Tap Y' onPress={getData} />
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
