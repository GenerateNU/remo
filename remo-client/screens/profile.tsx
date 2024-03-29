import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  // Button
} from "react-native";
import { Button } from "@rneui/themed";
import SelectDropdown from "react-native-select-dropdown";
import NavBar from "../components/Navbar/navbar";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {
  const route = useRoute();
  const data = route.params?.data;
  const navigation = useNavigation();


  const name = data.firstName + " " + data.lastName;

  const [prefferedName, setPrefferedName] = useState(name);
  const [eth, setEth] = useState(data.eth);
  const [gender, setGender] = useState(data.gender);

  const newData = {
    ...data,
    prefferedName: prefferedName,
    gender: gender,
    eth: eth,
  };
  console.log(data);
  useEffect(() => {
    console.log(data);
  }, []);

  const navigateLogin = () => {
    navigation.navigate("GoogleSSO");
  };

  const ethnicities: string[] = [
    "White",
    "Black or African American",
    "Asian",
    "Hispanic or Latino",
    "Two or more races",
    "Native Hawaiian or Other Pacific Islander",
    "American Indian or Alaska Native",
    "Other",
  ];
  const genders = [
    "Male",
    "Female",
    "Non-Binary",
    "Other",
    "Prefer Not to Say",
  ];

  const renderIcon = () => {
    return <i className="bi bi-caret-down-fill"></i>;
  };
  const navigateNotifs = () => {
    navigation.navigate("Notifications", {data: newData});
  }

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
          <Image style={styles.profile} source={{ uri: data.image }} />
          <View>
            <Text style={{ fontWeight: "bold" }}> {prefferedName} </Text>
            <Text> {data.email} </Text>

            <Text> {data.pronouns} </Text>
          </View>
        </View>
        <Text>Preferred Name</Text>
        <TextInput
          onChangeText={setPrefferedName}
          defaultValue={name}
          value={prefferedName}
          style={styles.input}
        />
        <Text>Ethnicity</Text>
        <SelectDropdown
          data={ethnicities}
          buttonStyle={styles.dropdown}
          defaultValue={eth}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#444"}
                size={20}
              />
            );
          }}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setEth(selectedItem);
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
          defaultValue={gender}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#444"}
                size={20}
              />
            );
          }}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setGender(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          
        />
         <Text>Reminder Notifications</Text>
         <Button style={styles.notifs} onPress={navigateNotifs} color="white" title="Toggle On/Off">  <Text >Toggle On/Off</Text></Button>
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
            title="Sign Out"
            color="black"
            onPress={navigateLogin}
          ></Button>
        </View>
      </View>
      <View style={styles.bot}>
        <NavBar navigation={navigation} data={newData} />
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
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },
  notifs: {
    width: "100%",
    // marginBottom: 12,
    backgroundColor: "white",
    borderColor: "black",
    color: "black",
    borderWidth: 1,
    borderRadius:2,
  },
  profile: {
    width: 65,
    height: 65,
    marginRight: 12,
    borderRadius: "50%",
  },
});
