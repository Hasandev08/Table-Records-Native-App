import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './app/screens/HomeScreen'
import TableScreen from './app/screens/TableScreen'
import Drawer from './app/components/Drawer'

export default function App() {
  // const Stack = createNativeStackNavigator()
  const Stack = createDrawerNavigator()

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='TableScreen' component={TableScreen} options={{ headerShown: false }} />
      </Stack.Navigator> */}
      <Stack.Navigator initialRouteName='Home' drawerContent={(props) => <Drawer {...props} />}>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='TableScreen' component={TableScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
