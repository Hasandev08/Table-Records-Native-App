import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '50%',
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: RFValue(16),
  },
})
