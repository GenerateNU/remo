import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Keyboard,
  Pressable,
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
  const [notesVisible, setNotesVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal isVisible={helpVisible} style={styles.helpModal}>
        <View style={styles.helpModalDisplay}>
          <View style={styles.modalTop}>
            <MaterialCommunityIcons
              name="comment-question-outline"
              size={24}
              style={styles.color}
            />
            <Text style={styles.modalText}>Help</Text>
            <Pressable onPress={() => setHelpVisible(false)}>
              <View style={styles.xBox}>
                <Text>x</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.modalRow}>
            <Text style={[styles.modalTextSmall, { fontWeight: "bold" }]}>
              Strategy:{" "}
            </Text>
            <Text style={styles.modalTextSmall}>SWBSTF </Text>
          </View>
          <View style={styles.simpleCol}>
            <View style={styles.modalRow}>
              <Text style={[styles.modalTextSmall, { fontWeight: "bold" }]}>
                Somebody:{" "}
              </Text>
              <Text style={styles.modalTextSmall}>identify the character </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={[styles.modalTextSmall, { fontWeight: "bold" }]}>
                Wanted:{" "}
              </Text>
              <Text style={styles.modalTextSmall}>
                identify the character's goal{" "}
              </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={[styles.modalTextSmall, { fontWeight: "bold" }]}>
                But:{" "}
              </Text>
              <Text style={styles.modalTextSmall}>identify the character </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={[styles.modalTextSmall, { fontWeight: "bold" }]}>
                So:{" "}
              </Text>
              <Text style={styles.modalTextSmall}>
                identify what the character does{" "}
              </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={[styles.modalTextSmall, { fontWeight: "bold" }]}>
                Then:{" "}
              </Text>
              <Text style={styles.modalTextSmall}>
                identify the consequences of the char-{"\n"}acter's actions{" "}
              </Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={[styles.modalTextSmall, { fontWeight: "bold" }]}>
                Finally:{" "}
              </Text>
              <Text style={styles.modalTextSmall}>
                identify the resolution to the problem{" "}
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      <Modal isVisible={notesVisible} style={styles.helpModal}>
        <View style={styles.notesModalDisplay}>
          <View style={[styles.modalTop, styles.spaceRow]}>
            <MaterialCommunityIcons
              name="comment-question-outline"
              size={24}
              style={styles.color}
            />
            <Text style={styles.modalText}>Notes</Text>
            <Pressable onPress={() => setNotesVisible(false)}>
              <View style={styles.xBox}>
                <Text>x</Text>
              </View>
            </Pressable>
          </View>
          <Text style={[styles.spaceRow, styles.bold, { fontSize: 20 }]}>
            Refer to or copy any notes to pase
          </Text>
          <Text style={{ fontSize: 20 }}>{states.text}</Text>
        </View>
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
            <Button
              buttonStyle={styles.button}
              type={"outline"}
              onPress={() => setNotesVisible(true)}
            >
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
        <BottomButtons pageSetter={setters.page} pageToGo={"howGoes"} />
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
  modalTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  simpleCol: {
    flexDirection: "column",
  },
  modalRow: {
    flexDirection: "row",
  },
  xBox: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 1,
    borderRadius: 7,
  },
  modalText: {
    fontSize: 20,
  },
  modalTextSmall: {
    fontSize: 16,
  },
  helpModal: {
    justifyContent: "flex-end",
    margin: 0,
    alignItems: "center",
  },
  helpModalDisplay: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    height: 300,
    backgroundColor: "white",
    paddingVertical: 32,
    paddingHorizontal: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  notesModalDisplay: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: 650,
    backgroundColor: "white",
    paddingVertical: 32,
    paddingHorizontal: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  spaceRow: {
    marginBottom: 20,
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
