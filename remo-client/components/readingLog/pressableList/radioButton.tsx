import { View, StyleSheet } from "react-native";
import React from "react";

export default function RadioButton({ state, item }) {
  return (
    <View style={styles.radio}>
      {state === item && (
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 6,
            backgroundColor: "#954A98",
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#954A98",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
});
