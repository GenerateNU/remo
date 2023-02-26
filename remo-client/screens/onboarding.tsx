import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Onboarding1 from "../components/onboarding1";
import Onboarding2 from "../components/onboarding2";
import Onboarding3 from "../components/onboarding3";
import Onboarding4 from "../components/onboarding4";
import Onboarding5 from "../components/onboarding5";
import Onboarding6 from "../components/onboarding6";
import Onboarding7 from "../components/onboarding7";
import Onboarding8 from "../components/onboarding8";
import Onboarding9 from "../components/onboarding9";
import Onboarding10 from "../components/onboarding10";
import Onboarding11 from "../components/onboarding11";
import Onboarding12 from "../components/onboarding12";
import TopComponent from "../components/topOnboarding/topComponent";
import ProgressBar from "../components/progressbar/progressbar";

export default function Onboarding() {
  const [page, setPage] = useState<string>("pageone");
  const [pageNum, setPageNum] = useState(0);

  const setPageNumber = (page: string) => {
    if (page === "pageone") {
      setPageNum(0);
    } else if (page === "pagetwo") {
      setPageNum(1);
    } else if (page === "pagethree") {
      setPageNum(2);
    } else if (page === "pagefour") {
      setPageNum(3);
    } else if (page === "pagefive") {
      setPageNum(4);
    } else if (page === "pagesix") {
      setPageNum(5);
    } else if (page === "pageseven") {
      setPageNum(6);
    } else if (page === "pageeight") {
      setPageNum(7);
    } else if (page === "pagenine") {
      setPageNum(8);
    } else if (page === "pageten") {
      setPageNum(9);
    } else if (page === "pageeleven") {
      setPageNum(10);
    } else if (page === "pagetwelve") {
      setPageNum(11);
    }
  };

  const nextPage = (page: string) => {
    setPage(page);
  };

  useEffect(() => {
    console.log(page);
    setPageNumber(page);
  }, [page]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TopComponent page={page} setPage={setPage} />
      </View>
      <View style={styles.progressBar}>
        <ProgressBar activeStep={pageNum} />
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
  progressBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 30,
  },
});
