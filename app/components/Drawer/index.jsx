import { Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { styles } from './style'

import colors from '../../config/colors'

const Drawer = ({ navigation }) => (
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
        <TouchableOpacity
          onPress={() => navigation.navigate('TableScreen')}
          activeOpacity={0.7}
          style={styles.routeBtn}
        >
          <Text style={styles.routeName}>Table</Text>
          <AntDesign name='caretright' size={26} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  </>
)

export default Drawer
