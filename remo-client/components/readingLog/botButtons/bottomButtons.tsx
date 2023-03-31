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
      <Button
        buttonStyle={styles.leftButton}
        type={"outline"}
        onPress={exit}
        title={"Exit"}
      ></Button>
      <Button
        buttonStyle={styles.rightButton}
        onPress={nextPage}
        title={"Next"}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  leftButton: {
    width: "20%",
  },
  rightButton: {
    width: "60%",
  },
  flow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
