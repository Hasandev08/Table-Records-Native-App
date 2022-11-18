import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  navbar: {
    backgroundColor: colors.theme,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: RFValue(14),
    fontWeight: '500',
    paddingLeft: 25,
  },
})
