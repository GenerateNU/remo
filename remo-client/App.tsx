import React, { useState } from "react";
import Home from "./screens/home";
import { NavigationContainer } from "@react-navigation/native";
import BarcodeScanner from "./screens/barcodeScanner";
import GoogleSSO from "./screens/googleSSO";
import Bookshelf from "./screens/bookshelf";
import Profile from "./screens/profile";
import Onboarding from "./screens/onboarding";
import Timer from "./screens/timer";
import ReadingLog from "./screens/readinglog";
import AddReadingLog from "./screens/addReadingLog";
import PostReadingLog from "./screens/postReading";
import ReadingLogDisplay from "./screens/readinLogDisplay";
import SearchScreen from "./screens/searchSceen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/register";
import BookInfo from "./screens/bookinfo";
import Returns from "./screens/returnShelf";
import BookReturn from "./screens/bookReturn";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GoogleSSO" component={GoogleSSO} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="BarcodeScanner" component={BarcodeScanner} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Bookshelf" component={Bookshelf} />
        <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen name="ReadingLog" component={ReadingLog} />
        <Stack.Screen name="BookInfo" component={BookInfo} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="AddReadingLog" component={AddReadingLog} />
        <Stack.Screen name="PostReadingLog" component={PostReadingLog} />
        <Stack.Screen name="ReadingLogDisplay" component={ReadingLogDisplay} />
        <Stack.Screen name="Returns" component={Returns} />
        <Stack.Screen name="BookReturn" component={BookReturn} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



