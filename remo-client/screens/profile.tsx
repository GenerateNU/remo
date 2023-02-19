import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  NavigationContainer,
  useNavigation,
  Stack,
} from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';

export default function Profile({ navigation }) {


    const ethnicities = ["White", "African American", "Asian", "Other", "Prefer Not to Say"];
    const genders = ["Male", "Female", "Non-Binary", "Other", "Prefer Not to Say"];
    const [text, onChangeText] = React.useState('Prefered Name');
    
    const renderIcon = () => {
        return (<i className="bi bi-caret-down-fill"></i>);
    }

    return (
        <View style={styles.container}>
        
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 24, marginTop: 12}}>
            <Image style={styles.profile} source={require('../public/lebron.jpeg')}/>
            <View>
                <Text>Lebron</Text>
                <Text>He/Him/His</Text>
            </View>

          </View>
          <Text>Preferred Name</Text>
          <TextInput
            onChangeText={onChangeText}
            value={text}
            style={styles.input}
          />
          <Text>Ethnicity</Text>
          <SelectDropdown
            data={ethnicities}
            buttonStyle={styles.dropdown}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
            }}
            />
          <Text>Gender Identity</Text>
          <SelectDropdown
            data={genders}
            buttonStyle={styles.dropdown}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
            }}
            />
            
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
      },
      input: {
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        width: "95%",
      },
      dropdown: {
        width: "95%",
      },
      profile: {
        width: 65,
        height: 65,
        marginRight: 12,
        borderRadius: '50%',
      },
    });