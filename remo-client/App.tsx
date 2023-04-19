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
import ReadingLogFlow from "./screens/readingLogFlow";
import ReadingLogDisplay from "./screens/readinLogDisplay";
import SearchScreen from "./screens/searchSceen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/register";
import BookInfo from "./screens/bookinfo";
import Returns from "./screens/returnShelf";
import BookReturn from "./screens/bookReturn";
import { Button } from "react-native";
import Notifications from "./screens/notifications";

const Stack = createNativeStackNavigator();

export default function App() {
  window.addEventListener = (x) => x;
  window.removeEventListener = (x) => x;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
          }}
        />
        <Stack.Screen
          name="GoogleSSO"
          component={GoogleSSO}
          options={{
            title: "",
          }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="BarcodeScanner" component={BarcodeScanner} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Profile",
            headerStyle: {
              backgroundColor: "#954A98",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen
          name="Bookshelf"
          component={Bookshelf}
          options={{
            title: "Bookshelf",
            headerStyle: {
              backgroundColor: "#954A98",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen
          name="ReadingLogFlow"
          component={ReadingLogFlow}
          options={{
            title: "Add Reading Log",
            headerStyle: {
              backgroundColor: "#954A98",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="ReadingLog"
          component={ReadingLog}
          options={{
            title: "Add Reading Log",
            headerStyle: {
              backgroundColor: "#954A98",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="BookInfo"
          component={BookInfo}
          options={{
            title: "Book Info",
            headerStyle: {
              backgroundColor: "#954A98",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: "Find a Book",
            headerStyle: {
              backgroundColor: "#954A98",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="AddReadingLog"
          component={AddReadingLog}
          options={{
            title: "Add Reading Log",
            headerStyle: {
              backgroundColor: "#954A98",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen name="PostReadingLog" component={PostReadingLog} />
        <Stack.Screen name="ReadingLogDisplay" component={ReadingLogDisplay} />
        <Stack.Screen
          name="Returns"
          component={Returns}
          options={{
            title: "Return a Book",
            headerStyle: {
              backgroundColor: "#954A98",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="BookReturn"
          component={BookReturn}
          options={{
            title: "Return a Book",
            headerStyle: {
              backgroundColor: "#954A98",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: "Notifications",
            headerStyle: {
              backgroundColor: "#954A98",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
