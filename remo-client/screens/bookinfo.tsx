import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function BookInfo() {
  const route = useRoute();

  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [published, setPublished] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [bookCover, setBookCover] = useState("");
  const [synopsis, setSynopsis] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Text>{bookTitle}</Text>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Image source={require(bookCover)} />

          <View></View>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Text>Author: {author}</Text>
        <Text>Page Count: {pageCount}</Text>
        {published !== "" && <Text>Published: {published}</Text>}
        {subtitle !== "" && <Text>Subtitle: {subtitle}</Text>}
        {synopsis !== "" && <Text>Subtitle: {synopsis}</Text>}
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      ></View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 25,
    paddingRight: 25,
  },
});
