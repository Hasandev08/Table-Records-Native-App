import React from 'react'

import { TouchableWithoutFeedback, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import colors from '../../config/colors'

const MenuButton = () => (
  <View>
    <TouchableWithoutFeedback>
      <Ionicons name='menu' size={56} color={colors.white} />
    </TouchableWithoutFeedback>
  </View>
)

export default MenuButton
