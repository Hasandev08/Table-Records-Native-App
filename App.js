import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './app/screens/HomeScreen'
import TableScreen from './app/screens/TableScreen'

export default function App() {
  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='TableScreen' component={TableScreen} options={{ headerShown: false }} />
      </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen
          name='TableScreen'
          component={TableScreen}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
