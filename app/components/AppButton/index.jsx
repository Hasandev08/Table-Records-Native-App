import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import colors from '../../config/colors'

import { styles } from './style'

const AppButton = ({ title, onPress, color = 'button' }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
)

export default AppButton
