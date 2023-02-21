import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import {
  NavigationContainer,
  useNavigation,
  Stack,
} from "@react-navigation/native";
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet, Text, View, Image, Button, Pressable, TouchableOpacity, TextInput } from "react-native";

export default function Onboarding5({ navigation }) {

    const [selected, setSelected] = useState(false);


    return (
        <View style={styles.container}>
             <View style={styles.block}>  
                <Text style={styles.question}>How often do you finish a book?</Text>
             <View style={{alignContent: "space-around", flexDirection: 'row', paddingBottom: 15, paddingRight: 15, paddingLeft: 15}}>
             <Pressable style={styles.option}>
                 <Text style={styles.text}>{"Always"}</Text>
                    </Pressable>
                    <Pressable style={styles.option}>
                 <Text style={styles.text}>{"Most of the time"}</Text>
                    </Pressable>
             </View>
             <View style={{alignContent: "space-around", flexDirection: 'row', paddingBottom: 15, paddingRight: 15, paddingLeft: 15}}>
             <Pressable style={styles.option}>
                 <Text style={styles.text}>{"Sometimes"}</Text>
                    </Pressable>
                    <Pressable style={styles.option}>
                 <Text style={styles.text}>{"Never"}</Text>
                    </Pressable>
                    </View>
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
          flexDirection: "column",
          borderWidth: 1,
          borderRadius: 20,
          marginTop: 100,
        },
        question: {
            alignItems: "center",
            fontSize: 20,
            paddingLeft: 50,
            paddingBottom: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingRight: 50,
            alignContent: "center",
            marginTop: 40
           
        }, 
        option: {
            width: "70%",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderHeight: 10,
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
        },
        text: {
            width: "50%",
            alignContent: "center",
            justifyContent: "center",
            textAlign: 'center',
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
        },
        next: {
            flex: 1, 
            justifyContent: "flex-end", 
            paddingLeft: 100, 
            marginBottom: 80,
        }
});