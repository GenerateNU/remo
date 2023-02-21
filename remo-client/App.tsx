import React, {useState} from 'react';
import Home from './screens/home';
import Navigator from './routes/homeStack';
import { NavigationContainer} from "@react-navigation/native";
import BarcodeScanner from './screens/barcodeScanner';
import GoogleSSO from './screens/googleSSO';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          name="BarcodeScanner"
          component={BarcodeScanner}
        />
        <Stack.Screen 
          name="GoogleSSO"
          component={GoogleSSO}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
