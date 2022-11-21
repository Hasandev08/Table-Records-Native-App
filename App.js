import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './app/screens/HomeScreen'
import TableScreen from './app/screens/TableScreen'
import Drawer from './app/components/Drawer'

export default function App() {
  const Stack = createDrawerNavigator()

  const getData = (data) => {
    console.log('Parent', data)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' drawerContent={(props) => <Drawer {...props} />}>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='TableScreen' component={TableScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
