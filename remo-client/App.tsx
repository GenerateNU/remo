import React, { useState } from "react";
import Home from "./screens/home";
import { NavigationContainer } from "@react-navigation/native";
import BarcodeScanner from "./screens/barcodeScanner";
import GoogleSSO from "./screens/googleSSO";
import Bookshelf from "./screens/bookshelf";
import Profile from "./screens/profile";
import Onboarding from "./screens/onboarding";
import ReadingLog from "./screens/readinglog";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GoogleSSO" component={GoogleSSO} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BarcodeScanner" component={BarcodeScanner} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Bookshelf" component={Bookshelf} />
        <Stack.Screen name="ReadingLog" component={ReadingLog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
