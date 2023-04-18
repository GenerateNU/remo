import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BookIcon from "react-native-bootstrap-icons/icons/book";
import SearchIcon from "react-native-bootstrap-icons/icons/search";
import BookmarkPlusIcon from "react-native-bootstrap-icons/icons/bookmark-plus";
import ArrowLeftSquareIcon from "react-native-bootstrap-icons/icons/arrow-left-square";
import PersonCircleIcon from "react-native-bootstrap-icons/icons/person-circle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import Profile from "../../screens/profile";
import { useNavigation } from "@react-navigation/native";

export default function NavBar({ navigation, data }) {
  const navigateSearch = () => {
    navigation.navigate("Search", {
      data: data,
    });
  };
  const navigateBookshelf = () => {
    navigation.navigate("Bookshelf", { data: data });
  };
  const navigateReadinglog = () => {
    navigation.navigate("ReadingLog", { data: data });
  };
  const navigateReturn = () => {
    navigation.navigate("Returns", { data: data });
  };
  const navigateProfile = () => {
    navigation.navigate("Profile", { data: data });
  };
  return (
    <View style={styles.navbar}>
      <View>
        <Ionicons
          style={styles.icon}
          name="ios-book-outline"
          size={40}
          onPress={navigateBookshelf}
        />
      </View>
      <View>
        <AntDesign
          style={styles.icon}
          name="search1"
          size={40}
          onPress={navigateSearch}
        />
      </View>
      <View>
        <MaterialCommunityIcons
          name="bookmark-plus-outline"
          style={styles.icon}
          size={40}
          onPress={navigateReadinglog}
        />
      </View>
      <View>
        <AntDesign style={styles.icon} name="arrowleft" size={40} onPress={navigateReturn} />
      </View>
      <View>
        <Ionicons style={styles.icon} name="person-circle-outline" size={40} onPress={navigateProfile}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    paddingBottom: 12,
    paddingLeft: "9%",
    paddingRight: 12,
    backgroundColor: "white",
    borderColor: "black",
    borderTopWidth: 2,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyConter: "space-between",
  },
  icon: {
    padding: 12,
  },
});
