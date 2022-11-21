import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: colors.tableBorders,
    marginVertical: 30,
  },
  heading: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.tableBorders,
    backgroundColor: colors.headingColor,
  },
  header: {
    fontWeight: 'bold',
    fontSize: RFValue(16),
    paddingVertical: 20,
    paddingRight: 30,
    paddingLeft: 35,
  },
  entities: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.tableBorders,
  },
  entries: {
    fontSize: RFValue(12),
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  type: {
    fontSize: RFValue(12),
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingLeft: 60,
  },
  buttons: {
    width: '100%',
    marginBottom: 100,
    alignItems: 'center',
  },
})
