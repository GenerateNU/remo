import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Modal from "react-native-modal";

export default function ViewNote({ title, responseType, response }) {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Modal isVisible={visible} style={styles.helpModal}>
        <View style={styles.helpModalDisplay}>
          <View style={styles.modalTop}>
            <FontAwesome
              name="pencil-square-o"
              size={24}
              style={styles.color}
            />
            <Text style={styles.modalText}>Help</Text>
            <Pressable onPress={() => setVisible(false)}>
              <View style={styles.xBox}>
                <Text>x</Text>
              </View>
            </Pressable>
          </View>
          <Text>Summary;</Text>
          <Text>{response}</Text>
        </View>
      </Modal>
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.bold}>{title}</Text>
          <Text>{responseType}</Text>
        </View>
        <View>
          <Button
            type={"outline"}
            titleStyle={{ color: "#954A98" }}
            buttonStyle={[styles.button, { backgroundColor: "white" }]}
            onPress={() => setVisible(true)}
          >
            View
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
  },
  left: {
    flex: 3,
  },
  right: {
    flex: 2,
  },
  bold: {
    fontWeight: "bold",
    color: "#65298B",
    fontSize: 20,
  },
  button: {
    width: 100,
    borderRadius: 8,
    color: "#954A98",
    shadowColor: "#D9D9D9",
    shadowRadius: 8,
    shadowOffset: { width: 4, height: 20 },
    shadowOpacity: 0.6,
  },
  modalTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  helpModal: {
    justifyContent: "flex-end",
    margin: 0,
    alignItems: "center",
  },
  helpModalDisplay: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: 300,
    backgroundColor: "white",
    paddingVertical: 32,
    paddingHorizontal: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  color: {
    color: "#954A98",
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
});
