import React from 'react'
import { Text, View } from 'react-native'

import MenuButton from '../MenuButton'

import { styles } from './style'

function Navbar(props) {
  return (
    <View style={styles.navbar}>
      <MenuButton />
      <Text style={styles.text}>welcome, user@username.com</Text>
    </View>
  )
}

export default Navbar
