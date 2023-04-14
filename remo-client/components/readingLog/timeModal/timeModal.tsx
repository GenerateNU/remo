import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Button } from "@rneui/themed";
import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Modal from "react-native-modal";

export default function timeModal({ setter, state }) {
  const timeEvent = (event: DateTimePickerEvent, date?: Date) => {
    if (event.type === "set" && date) {
      setter(date);
    }
  };

  return (
    <View>
      <View style={styles.timeDisplay}>
        <DateTimePicker
          style={styles.timePicker}
          mode={"time"}
          value={state}
          onChange={timeEvent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#954A98",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
  },
  timeDisplay: {
    flexDirection: "row",
    padding: 12,
    width: "100%",
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 6,
  },
  timePicker: {},
});
