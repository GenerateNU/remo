import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import {
  NavigationContainer,
  useNavigation,
  Stack,
} from "@react-navigation/native";
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";

export default function Onboarding3({ navigation }) {

    const books = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <View style={styles.container}>
             <View style={styles.block}>
             <Text style={styles.question}>How many books will you read this year?</Text>
                <SelectDropdown
                    data={books}
                    buttonStyle={styles.dropdown}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}/>
                </View>
             <View style={styles.next}>
                <Button title="Next Question" color="black" ></Button>
            </View>
        </View>
      );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: 25,
          paddingRight: 25,
        },
        block: {
          backgroundColor: "white",
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: 25,
          paddingRight: 25,
          borderWidth: 1,
          borderRadius: 20,
          marginTop: 150
        },
        question: {
            alignItems: "center",
            fontSize: 20,
            paddingLeft: 30,
            paddingBottom: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingRight: 30,
            alignContent: "center",
            marginTop: 50
           
        }, 
        dropdown: {
            width: "75%",
        },
        next: {
            flex: 1, 
            justifyContent: "flex-end", 
            paddingLeft: 100, 
            marginBottom: 80,
        }
});