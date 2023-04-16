import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
<<<<<<< HEAD
    fetch(
      "https://65dc-155-33-135-36.ngrok-free.app/v1/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      }
    )
=======
    fetch("https://7d94-155-33-132-42.ngrok.io/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
>>>>>>> 9d4274d6df75da7c28bb2ce145a93f36fc4ad10f
      .then((response) => {
        if (response.ok) {
          // Registration successful, navigate to success screen
          console.log("Registration successful");
          navigation.navigate("GoogleSSO");
        } else {
          // Registration failed, show error message
          console.log("Registration failed");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        {" "}
        Enter your Gmail to register with ReMo:
      </Text>
      <Text></Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="example@gmail.com"
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
    backgroundColor: "black",
    height: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: "#f2f2f2",
    padding: 10,
    width: 200,
    textAlign: "center",
    marginVertical: 7,
  },
});
