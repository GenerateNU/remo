import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BookIcon from "react-native-bootstrap-icons/icons/book";
import SearchIcon from "react-native-bootstrap-icons/icons/search";
import BookmarkPlusIcon from "react-native-bootstrap-icons/icons/bookmark-plus";
import ArrowLeftSquareIcon from "react-native-bootstrap-icons/icons/arrow-left-square";
import PersonCircleIcon from "react-native-bootstrap-icons/icons/person-circle";
import BarcodeScanner from "../screens/barcodeScanner";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import Profile from "../../screens/profile";
import { useNavigation } from "@react-navigation/native";

export default function NavBar({ navigation, data }) {
  const navigateBarcode = () => {
    navigation.navigate("BarcodeScanner");
  };
  const navigateBookshelf = () => {
    navigation.navigate("Bookshelf");
  };
  const navigateReadinglog = () => {
    navigation.navigate("ReadingLog");
  };
  return (
    <View style={styles.navbar}>
      <Ionicons
        style={styles.icon}
        name="ios-book-outline"
        size={50}
        onPress={navigateBookshelf}
      />
      <AntDesign
        style={styles.icon}
        name="search1"
        size={50}
        onPress={navigateBarcode}
      />
      <MaterialCommunityIcons
        name="bookmark-plus-outline"
        style={styles.icon}
        size={50}
        onPress={navigateReadinglog}
      />
      <AntDesign style={styles.icon} name="arrowleft" size={50} />
      <Ionicons style={styles.icon} name="person-circle-outline" size={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 12,
    backgroundColor: "white",
    borderColor: "black",
    borderTopWidth: 2,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyConter: "center",
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
});
