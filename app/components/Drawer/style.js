import { StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
  },

  routeBtnWrapper: {
    width: '100%',
    justifyContent: 'center',
    marginTop: RFPercentage(3),
  },

  routeBtn: {
    margin: RFPercentage(2),
    flexDirection: 'row',
    alignItems: 'center',
  },

  routeName: {
    fontSize: RFPercentage(3.5),
    fontWeight: '400',
    marginVertical: RFPercentage(1),
    marginHorizontal: RFPercentage(3),
    color: colors.white,
    fontWeight: 'bold',
  },
})
