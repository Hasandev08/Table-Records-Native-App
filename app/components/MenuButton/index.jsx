import React from 'react'

import { TouchableWithoutFeedback, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import colors from '../../config/colors'

const MenuButton = ({ navigation }) => (
  <View>
    <TouchableWithoutFeedback onPress={() => navigation.openDrawer()} >
      <Ionicons name='menu' size={45} color={colors.white} />
    </TouchableWithoutFeedback>
  </View>
)

export default MenuButton
