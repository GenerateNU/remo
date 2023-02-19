import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import {
  NavigationContainer,
  useNavigation,
  Stack,
} from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import Onboarding1 from "./onboarding1";
import Onboarding2 from "./onboarding2";
import Onboarding3 from "./onboarding3";
import Onboarding4 from "./onboarding4";


export default function Onboarding({ navigation }) {

    const [page, setPage] = useState("onboarding1");

    const nextPage = (page) => {
      setPage(page);
    };

    return (
        <View style={styles.container}>
          <Text style={{fontSize: 50, fontWeight: 'bold'}}> REMO</Text>
          {
        {
          pageone: <Onboarding1 onButtonClick={nextPage} />,
          pagetwo: <Onboarding2 onButtonClick={nextPage} />,
          pagethree: <Onboarding3 onButtonClick={nextPage} />,
          pagefour: <Onboarding4 />,
        }[page]
      }
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingLeft: 25,
        paddingRight: 25,
      }
    });