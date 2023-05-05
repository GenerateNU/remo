import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { logReadingLog } from "../../../services/book-services";

export default function BottomButtonsDone({ pageToGo, postInfo, data }) {
  const navigation = useNavigation();

  const exit = () => {
    navigation.navigate("ReadingLog", { data: data });
  };

  const nextPage = () => {
    console.log(pageToGo);
    console.log(postInfo);
  };

  const postReadingLog = async () => {
    const response = await logReadingLog(postInfo);
    console.log(response);
    Alert.alert(
      "Reading Log",
      "Reading Log response has been posted!",
      [
        {
          text: "Ok",
          style: "default",
          onPress: () => navigation.navigate("Profile", { data: data }),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.flow}>
      <View style={styles.leftButton}>
        <Button
          buttonStyle={[styles.button, { backgroundColor: "white" }]}
          type={"outline"}
          onPress={exit}
        >
          <Text style={styles.color}>Exit</Text>
        </Button>
      </View>
      <View style={styles.rightButton}>
        <Button
          buttonStyle={styles.button}
          color={"#954A98"}
          onPress={postReadingLog}
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
