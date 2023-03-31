import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Switch} from 'react-native';
import { useNavigation } from "@react-navigation/native";


import {
    useRoute
  } from "@react-navigation/native";


const Notifications = () => {
    const route = useRoute();
    const data = route.params?.data;
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const [notifMessage, setNotifMessage] = useState("");

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Reminder Notifications </Text>
      <Text></Text>
      <View style={{
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 5,
      shadowColor: '#000',
      marginTop: 50,
      marginStart: 10,
      marginEnd: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    }}>
        <Text style={{marginTop:20, marginLeft: 10}}>Toggle On/Off</Text>
        <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ marginTop: -20, marginBottom:5, marginLeft: 275}}
        />
      <TextInput
        onChangeText={setNotifMessage}
        keyboardType="default"
        autoCapitalize="none"
        placeholder='Read for 30 minutes'
        autoCorrect={false}
        style={styles.textInput}
      />    
      </View>

    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	title: {
        position: "absolute",
        font_family: 'Open Sans',
        font_style: "normal",
        font_weight: "400",
        font_size: "14",
        line_height: "150%",
        /* or 21px */
        letter_spacing:" -0.019em",
        marginTop: 20,
        marginLeft: 10,
        color: "#000000",
        marginBottom: 50
	},
    textInput: {
        borderRadius: 10,
        borderWidth: .5,
        backgroundColor: '#f2f2f2',
        padding: 10,
        width: 200,
        textAlign: 'center',
        marginVertical:7,
        alignSelf: 'center',
        marginTop:10,
      },
});
