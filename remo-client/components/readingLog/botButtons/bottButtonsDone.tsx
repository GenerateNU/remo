import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function BottomButtonsDone({ pageToGo }) {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params?.data;

  const exit = () => {
    navigation.navigate("ReadingLog", { data: data });
  };

  const nextPage = () => {
    console.log("done");
  };

  return (
    <View style={styles.flow}>
      <View style={styles.leftButton}>
        <Button buttonStyle={[styles.button]} type={"outline"} onPress={exit}>
          <Text style={styles.color}>Exit</Text>
        </Button>
      </View>
      <View style={styles.rightButton}>
        <Button
          buttonStyle={styles.button}
          color={"#954A98"}
          onPress={nextPage}
          title={"Done"}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  leftButton: {
    flex: 2,
    width: "100%",
    paddingRight: 5,
  },
  rightButton: {
    flex: 4,
    width: "100%",
    paddingLeft: 5,
  },
  button: {
    width: "100%",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  flow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  color: {
    color: "#954A98",
    fontSize: 18,
  },
});
