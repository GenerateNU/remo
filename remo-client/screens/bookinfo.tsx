import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { Button } from "@rneui/themed";

export default function BookInfo() {
  const route = useRoute();
  const data = route.params?.data;
  console.log(data);

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
            paddingTop: 12,
          }}
        >
          <Text style={styles.title}>{data.title}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 4,
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Image source={{ uri: data.bookCover }} style={styles.book} />

          <View></View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        ></View>
      </View>
      <View
        style={{
          flex: 8,
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-start",
            height: "100%",
            paddingTop: 12,
          }}
        >
          <View style={[styles.infoRow]}>
            <Text style={styles.infoHeader}>Author: </Text>
            <Text>{data.author}</Text>
          </View>
          <View style={[styles.infoRow]}>
            <Text style={styles.infoHeader}>PageCount: </Text>
            <Text>{data.pageCount}</Text>
          </View>
          {data.published !== undefined && (
            <View style={[styles.infoRow]}>
              <Text style={styles.infoHeader}>Published: </Text>
              <Text>{data.published}</Text>
            </View>
          )}
          <View style={{ flex: 1 }}>
            {data.synopsis !== "" && (
              <View style={{ height: "100%" }}>
                <Text style={[styles.infoHeader, { marginBottom: 6 }]}>
                  Synopsis:
                </Text>
                <ScrollView style={styles.scrolltext}>
                  <Text>{data.synopsis}</Text>
                </ScrollView>
              </View>
            )}
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <Button buttonStyle={styles.button} title="Checkout" type="outline" />
      </View>
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
  button: {
    width: 150,
    color: "black",
    borderRadius: "20%",
    borderWidth: 1,
    margin: 12,
    marginBottom: 32,
  },
  book: {
    width: "80%",
    height: "100%",
    resizeMode: "contain",
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  infoRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  scrolltext: {
    height: 150,
  },
  infoHeader: {
    fontWeight: "bold",
  },
});
