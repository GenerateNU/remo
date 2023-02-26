import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import {
  NavigationContainer,
  useNavigation,
  Stack,
} from "@react-navigation/native";
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet, Text, View, ScrollView, Image, Button, Pressable, TouchableOpacity, TextInput } from "react-native";

export default function Onboarding10({ nextPage }) {

    const [selected, setSelected] = useState(false);

    const onClick = () => {
      nextPage("pageeleven");
    };

    return (
        <View style={styles.container}>
             <View style={styles.block}>
                <Text style={styles.question}>How much do you like reading?</Text>
                <ScrollView>
             <View style={{alignContent: "space-around", flexDirection: 'row', paddingBottom: 15, paddingRight: 15, paddingLeft: 15}}>
             <Pressable style={styles.option}>
        <Text style={styles.text}>{"Love it"}</Text>
         </Pressable>
                    <Pressable style={styles.option}>
                 <Text style={styles.text}>{"Like it"}</Text>
                    </Pressable>
             </View>
             <View style={{alignContent: "space-around", flexDirection: 'row', paddingBottom: 15, paddingRight: 15, paddingLeft: 15}}>
             <Pressable style={styles.option}>
                 <Text style={styles.text}>{"It's ok"}</Text>
                    </Pressable>
                    <Pressable style={styles.option}>
                 <Text style={styles.text}>{"Don't like it"}</Text>
                    </Pressable>
                    </View>
                    <Pressable style={styles.option}>
                 <Text style={styles.text}>{"Hate it"}</Text>
                    </Pressable>
                    </ScrollView>
                    </View>
             <View style={styles.next}>
                <Button title="Next Question" color="black" onPress={onClick}></Button>
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
          marginRight: 20,
        },
        block: {
          backgroundColor: "white",
          flex: 1.5,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: 25,
          paddingRight: 25,
          flexDirection: "column",
          borderWidth: 1,
          borderRadius: 20,
          marginTop: 100,
          width: "110%",
          marginRight: 100,
    
        },
        question: {
            alignItems: "center",
            fontSize: 20,
            paddingLeft: 20,
            paddingBottom: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingRight: 20,
            alignContent: "center",
            marginTop: 30
           
        }, 
        option: {
            width: "40%",
            flex: "flex-start",
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
            width: "80%",
            alignContent: "center",
            justifyContent: "center",
            textAlign: 'center',
            fontSize: 10,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 0,
            paddingRight: 0,
        },
        next: {
            flex: 1, 
            justifyContent: "flex-end", 
            paddingLeft: 100, 
            marginBottom: 80,
        }
});