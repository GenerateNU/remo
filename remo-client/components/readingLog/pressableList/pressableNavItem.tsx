import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import RadioButton from "./radioButton";

export default function PressableNavItem({ item, setter, state }) {
  const pressed = state === item;
  const selectItem = () => {
    setter(item);
    console.log(item);
    console.log(state);
  };
  return (
    <Pressable onPress={selectItem}>
      <View
        style={[
          styles.item,
          state === item ? styles.pressed : styles.unpressed,
        ]}
      >
        <RadioButton state={state} item={item} />
        <Text
          style={[
            styles.text,
            state === item ? styles.pressedText : styles.unpressedText,
          ]}
        >
          {item}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
    paddingHorizontal: 15,
    height: "100%",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 12,
  },
  pressed: {
    backgroundColor: "#954A98",
    color: "white",
    borderWidth: 0,
  },
  unpressed: {
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    flex: 1,
    flexWrap: "wrap",
    fontWeight: "300",
  },
  unpressedText: {
    color: "black",
  },
  pressedText: {
    color: "white",
  },
});
