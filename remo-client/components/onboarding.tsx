import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  NavigationContainer,
  useNavigation,
  Stack,
} from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Onboarding1 from "./onboarding1";
import Onboarding2 from "./onboarding2";
import Onboarding3 from "./onboarding3";
import Onboarding4 from "./onboarding4";
import TopComponent from "./topOnboarding/topComponent";

export default function Onboarding() {
  const [page, setPage] = useState<string>("pageone");

  const mainTop = () => {
    <Text style={{ fontSize: 40, fontWeight: "bold" }}> REMO ALT</Text>;
  };

  const nextPage = (page: string) => {
    setPage(page);
  };

  let BottomComponent = () => <Onboarding1 nextPage={nextPage} />;

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TopComponent page={page} setPage={setPage} />
      </View>
      {
        {
          pageone: <Onboarding1 nextPage={nextPage} />,
          pagetwo: <Onboarding2 nextPage={nextPage} />,
          pagethree: <Onboarding3 nextPage={nextPage} />,
          pagefour: <Onboarding4 nextPage={nextPage} />,
        }[page]
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 25,
    paddingRight: 25,
  },
  box: {
    width: "100%",
  },
});
