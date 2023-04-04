import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function BottomButtons({ pageSetter, pageToGo }) {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params?.data;

  const exit = () => {
    navigation.navigate("ReadingLog", { data: data });
  };

  const nextPage = () => {
    pageSetter(pageToGo);
  };

  return (
    <View style={styles.flow}>
      <View style={styles.leftButton}>
        <Button
          buttonStyle={styles.button}
          type={"outline"}
          onPress={exit}
          title={"Exit"}
        ></Button>
      </View>
      <View style={styles.rightButton}>
        <Button
          buttonStyle={styles.button}
          onPress={nextPage}
          title={"Next"}
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
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
