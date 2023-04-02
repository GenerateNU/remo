import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();  

  const handleRegister = () => {
    fetch('https://83c2-155-33-133-32.ngrok.io/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
      .then(response => {
        if (response.ok) {
          // Registration successful, navigate to success screen
          console.log('Registration successful');
          navigation.navigate("GoogleSSO");
        } else {
          // Registration failed, show error message
          console.log('Registration failed');
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}> Enter your Gmail to register with ReMo:</Text>
      <Text></Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder='example@gmail.com'
        autoCorrect={false}
        style={styles.textInput}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	display: {
		position: "relative",
		top: 0,
		left: 0,
	},
	googleText: {
		color: "white",
	},
	googleButton: {
		width: 180,
		backgroundColor: "#F15a23",
	},
	baseText: {	
		font_family: "Inter",
		font_style: "normal",
		font_weight: 500,
		font_size: "10px",
		color: "#000000",
	  },
	button: {
	backgroundColor: 'black',
	height: 10,
	justifyContent: 'center',
	alignItems: 'center',
	marginHorizontal: 20,
	marginVertical: 20,
	borderRadius: 10,
	},
	buttonText: {
	color: 'black',
	fontSize: 12,
	fontWeight: 'bold',
	},
  textInput: {
    borderRadius: 10,
    borderWidth: .5,
    backgroundColor: '#f2f2f2',
    padding: 10,
    width: 200,
    textAlign: 'center',
    marginVertical:7,
  },
});
