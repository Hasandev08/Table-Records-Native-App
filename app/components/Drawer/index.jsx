import { Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useEffect, useState } from 'react'

import { styles } from './style'

import colors from '../../config/colors'

const Drawer = ({ navigation }) => {
  const [count, setCount] = useState(0)

  const navigateToTable = () => {
    setCount(count + 1)
    navigation.navigate('TableScreen'),
      {
        data: { count },
      }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.routeBtnWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.7}
            style={styles.routeBtn}
          >
            <Text style={styles.routeName}>Home</Text>
            <AntDesign name='caretright' size={26} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToTable} activeOpacity={0.7} style={styles.routeBtn}>
            <Text style={styles.routeName}>Table</Text>
            <AntDesign name='caretright' size={26} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Drawer
