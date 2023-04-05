import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Keyboard,
} from "react-native";
import BottomButtons from "../botButtons/bottomButtons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import Modal from "react-native-modal";

export default function AddSummary({ setters, states }) {
  const keyHandles = ({ nativeEvent }) => {
    if (nativeEvent.key === "Enter") {
      Keyboard.dismiss();
    }
  };

  const [helpVisible, setHelpVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal isVisible={helpVisible} style={styles.helpModal}>
        <View style={styles.helpModalDisplay}></View>
      </Modal>
      <View style={styles.top}>
        <ScrollView>
          <View style={styles.topBox}>
            <Text>Please provide a summary of this section of the book</Text>
            <View>
              <Text style={styles.bold}>Definition</Text>
              <Text>A summary is a brief overview of the story</Text>
            </View>
          </View>
          <View style={styles.textBox}>
            <TextInput
              style={styles.input}
              value={states.summary}
              maxLength={200}
              multiline={true}
              onChangeText={setters.summary}
              placeholder="Enter text"
              onKeyPress={keyHandles}
            />
          </View>
          <View style={styles.buttons}>
            <Button buttonStyle={styles.button} type={"outline"}>
              <Text style={[styles.color, styles.buttonText]}>VIEW NOTES</Text>
            </Button>
            <Button
              buttonStyle={styles.button}
              type={"outline"}
              onPress={() => setHelpVisible(true)}
            >
              <MaterialCommunityIcons
                name="comment-question-outline"
                size={24}
                style={styles.color}
              />
              <Text style={[styles.color, styles.buttonText]}>HELP</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bot}>
        <BottomButtons pageSetter={setters.page} pageToGo={"displayPage"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  helpModal: {
    justifyContent: "flex-end",
    margin: 0,
    alignItems: "center",
  },
  helpModalDisplay: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  top: {
    flex: 7,
    width: "100%",
  },
  buttons: {
    justifyContent: "space-between",
    height: 100,
  },
  color: {
    color: "#954A98",
  },
  button: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#954A98",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
  },
  topBox: {
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
    height: 130,
    borderRadius: 15,
    borderColor: "#954A98",
    marginBottom: 15,
  },
  bold: {
    fontWeight: "bold",
  },
  bot: {
    flex: 1,
    justifyContent: "flex-start",
  },
  textBox: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 25,
  },
  input: {
    height: 250,
    borderWidth: 1,
    borderColor: "black",
    textAlignVertical: "top",
    padding: 20,
    paddingTop: 10,
    borderRadius: 20,
  },
});
