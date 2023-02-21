import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  NavigationContainer,
  useNavigation,
  Stack,
} from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { Button } from "@rneui/themed";
import SelectDropdown from "react-native-select-dropdown";
import NavBar from "../components/Navbar/navbar";

export default function Profile({ navigation }) {
  const ethnicities = [
    "White",
    "African American",
    "Asian",
    "Other",
    "Prefer Not to Say",
  ];
  const genders = [
    "Male",
    "Female",
    "Non-Binary",
    "Other",
    "Prefer Not to Say",
  ];
  const [text, onChangeText] = React.useState("Prefered Name");

  const renderIcon = () => {
    return <i className="bi bi-caret-down-fill"></i>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 24,
            marginTop: 12,
          }}
        >
          <Image
            style={styles.profile}
            source={require("../public/lebron.jpeg")}
          />
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
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        <Text>Gender Identity</Text>
        <SelectDropdown
          data={genders}
          buttonStyle={styles.dropdown}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        <View
          style={{
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
            marginTop: 150,
            backgroundColor: "white",
            marginBottom: 60,
          }}
        >
          <Button
            buttonStyle={styles.button}
            type="outline"
            title="Change Password"
            color="black"
          ></Button>
          <Button
            buttonStyle={styles.button}
            type="outline"
            title="Sign Out"
            color="black"
          ></Button>
        </View>
      </View>
      <View style={styles.bot}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  top: {
    flex: 8,
    flexDirection: "column",
    backgroundColor: "white",
    paddingLeft: 25,
    paddingRight: 25,
  },
  bot: {
    flex: 1,
  },
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
  button: {
    borderColor: "black",
    fontColor: "black",
    width: 225,
    borderRadius: "20%",
    borderWidth: 1,
    margin: 12,
  },
  dropdown: {
    width: "100%",
    marginBottom: 12,
  },
  profile: {
    width: 65,
    height: 65,
    marginRight: 12,
    borderRadius: "50%",
  },
});
