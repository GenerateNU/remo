import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import {
  NavigationContainer,
  useNavigation,
  Stack,
} from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";

export default function Onboarding1({ nextPage }) {

    return (
        <View style={styles.container}>
          <Text style={{fontSize: 50, fontWeight: 'bold'}}> REMO</Text>
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