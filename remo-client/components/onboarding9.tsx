import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import {
  NavigationContainer,
  useNavigation,
  Stack,
} from "@react-navigation/native";
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, TouchableOpacity, TextInput } from "react-native";
import PressableCard from "./pressablecard/pressablecard";
import { Button } from "@rneui/themed";

export default function Onboarding7({ nextPage }) {

    const [selected, setSelected] = useState(false);

    const onClick = () => {
      nextPage("pageten");
    };

    return (
        <View style={styles.container}>
         <View style={{
          flex: 5,
          flexDirection: "row",
          justifyContent: "center",
        }}>
            <View style={styles.block}>
               <Text style={styles.question}>How do you choose a book you want to read?</Text>
               <View style={{flex: 1, flexDirection: "row", width: "100%"}}>
                  <ScrollView>
                     <View style={{flex: 1, width: "100%", alignContent: "space-around", justifyContent: "center", flexDirection: 'row', flexWrap: "wrap", paddingBottom: 15, paddingRight: 15, paddingLeft: 15}}>
                        <PressableCard content={"By the cover"} />
                        <PressableCard content={"By reading the first few pages"} />
                        <PressableCard content={"By Author, Series, Genre"} />
                        <PressableCard content={"By topic"} />
                        <PressableCard content={"By friends"} />
                        <PressableCard content={"By family"} />
                        <PressableCard content={"By social media"} />
                        <PressableCard content={"By library"} />
                     </View>
                  </ScrollView>
               </View>
            </View>
            </View>
            <View
        style={{
          flex: 3,
          width: "100%",
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
             <View style={styles.next}>
             <Button
            title="Next Question"
            onPress={onClick}
            buttonStyle={styles.button}
          ></Button>
             </View>
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
      },
      block: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        
        flexDirection: "column",
        borderWidth: 1,
        borderRadius: 20,
      },
      question: {
        alignItems: "center",
        fontSize: 20,
        paddingLeft: 50,
        paddingBottom: 25,
        fontWeight: "bold",
        textAlign: "center",
        paddingRight: 50,
        alignContent: "center",
        marginTop: 40,
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
        textAlign: "center",
        paddingTop: 5,
        paddingBottom: 50,
      },
      next: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingBottom: 32,
      },
      button: {
        borderRadius: 20,
        backgroundColor: "black",
      },
    });
    