import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Onboarding1 from "./onboarding1";
import Onboarding2 from "./onboarding2";
import Onboarding3 from "./onboarding3";
import Onboarding4 from "./onboarding4";
import Onboarding5 from "./onboarding5";
import Onboarding6 from "./onboarding6";
import Onboarding7 from "./onboarding7";
import Onboarding8 from "./onboarding8";
import Onboarding9 from "./onboarding9";
import Onboarding10 from "./onboarding10";
import Onboarding11 from "./onboarding11";
import Onboarding12 from "./onboarding12";
import TopComponent from "./topOnboarding/topComponent";
//import ProgressBar from "./progressbar/progressbar";

export default function Onboarding() {
  const [page, setPage] = useState<string>("pageone");

  const mainTop = () => {
    <Text style={{ fontSize: 40, fontWeight: "bold" }}> REMO ALT</Text>;
  };

  const nextPage = (page: string) => {
    setPage(page);
  };

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
          pageone: <Onboarding1 nextPage={setPage} />,
          pagetwo: <Onboarding2 nextPage={setPage} />,
          pagethree: <Onboarding3 nextPage={nextPage} />,
          pagefour: <Onboarding4 nextPage={nextPage} />,
          pagefive: <Onboarding5 nextPage={nextPage} />,
          pagesix: <Onboarding6 nextPage={nextPage} />,
          pageseven: <Onboarding7 nextPage={nextPage} />,
          pageeight: <Onboarding8 nextPage={nextPage} />,
          pagenine: <Onboarding9 nextPage={nextPage} />,
          pageten: <Onboarding10 nextPage={nextPage} />,
          pageeleven: <Onboarding11 nextPage={nextPage} />,
          pagetwelve: <Onboarding12 nextPage={setPage} />,
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
