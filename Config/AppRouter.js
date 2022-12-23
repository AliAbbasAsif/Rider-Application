// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Rider from '../Screens/Rider';
import RegisterVehicle from '../Screens/RegisterVehicle';

const Stack = createNativeStackNavigator();

function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen"  options={{headerShown:false}} component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login"  options={{headerShown:false}} component={Login} />
        <Stack.Screen name="SignUp"  options={{headerShown:false}} component={SignUp} />
        <Stack.Screen name="RegisterVehicle"   component={RegisterVehicle} />
        <Stack.Screen name="Rider"   component={Rider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;