import React from 'react'
import { Text, View } from 'react-native'

import MenuButton from '../MenuButton'

import { styles } from './style'

const Navbar = ({ navigation }) => (
  <View style={styles.navbar}>
    <MenuButton navigation={navigation} />
    <Text style={styles.text}>welcome, user@username.com</Text>
  </View>
)

export default Navbar
