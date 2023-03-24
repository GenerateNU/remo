import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function PressableSearch({ content }) {
  const [pressed, setPressed] = useState(false);
  const onButtonpress = () => {
    setPressed(!pressed);
  };
  return (
    <Pressable
      style={[
        { backgroundColor: pressed ? "lightgray" : "white" },
        styles.option,
      ]}
      onPress={onButtonpress}
    >
      <Text style={styles.text}>{content}</Text>
    </Pressable>

  );
}
const styles = StyleSheet.create({
  text: {
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  option: {
    flex: 1,
    flexWrap: "wrap",
    width: "70%",
    height: 170,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderHeight: 10,
    borderRadius: 20,
    marginTop: 5,
  },
});
