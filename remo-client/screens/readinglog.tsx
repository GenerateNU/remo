import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { findUserBooks, ree } from "../services/book-services";
import NavBar from "../components/Navbar/navbar";

export default function ReadingLog({ navigation }) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [rlogs, setRlogs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const route = useRoute();
  const data = route.params?.data;

  useEffect(() => {
    getReadingLogBooks();
    getReadingLogs();
  }, []);

  const getReadingLogBooks = async () => {
    let readingLogBooks = await findUserBooks(data.id);
    readingLogBooks = readingLogBooks.slice(0, 4);
    setBooks(readingLogBooks);
    console.log(readingLogBooks);
  };

  const getReadingLogs = async () => {
    let readingLogs = await ree(data.id);
    readingLogs = readingLogs.slice(0, 5);
    setRlogs(readingLogs);
    console.log("--------------------------------")

    console.log(readingLogs);
    console.log("--------------------------------")
  };

  const onBookPress = () => {
    navigation.navigate("AddReadingLog", { data: data });
  };
  return (
    <View style={styles.bound}>
      <View style={styles.scroll}>
        <ScrollView style={styles.scroll}>
          <View style={styles.header}>
            <Text style={styles.header_title}>Currently Reading</Text>
          </View>
          <ScrollView style={[styles.scrollWrap, { width: "100%" }]}>
            <View style={styles.container}>
              {books.map((book) => (
                <TouchableOpacity
                  key={book.id}
                  style={[
                    styles.book,
                    selectedBook &&
                      selectedBook.id === book.id &&
                      styles.selected,
                  ]}
                  onPress={() => {
                    setSelectedBook(book);
                    setShowPopup(true);
                  }}
                >
                  <>
                    <View style={styles.bookContainer}>
                      <Image
                        source={{ uri: book.coverImage }}
                        style={styles.bookPicture}
                      />
                    </View>
                  </>
                </TouchableOpacity>
              ))}
              {selectedBook &&
                Alert.alert(
                  selectedBook.title,
                  `Author: ${selectedBook.author}\nISBN-13: ${selectedBook.isbn_13}\nSynopsis: ${selectedBook.synopsis}`
                )}
            </View>
          </ScrollView>
          <View style={styles.header}>
            <Text style={styles.header_title}>My Reading Log Reports</Text>
          </View>
          <ScrollView style={{ width: "100%" }}>
            <View style={styles.rlogContainer}>
              {rlogs.map((rlogs) => (
                <TouchableOpacity style={[styles.rlog]}>
                  <>
                    <Text style={styles.title}>Reading Log</Text>
                    <Text style={styles.title}>Total Pages: {rlogs.total_pages}</Text>
                    <Text style={styles.title}>Response: {rlogs.response}</Text>

                  </>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={() => onBookPress()}>
            <Text style={styles.buttonText}>Add Reading Log</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.bot}>
        <NavBar navigation={navigation} data={data} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bound: {
    flex: 1,
    width: "100%",
  },
  scroll: {
    flex: 9,
  },
  scrollWrap: {
    flexWrap: "wrap",
  },
  bot: {
    flex: 1,
  },
  bookContainer: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },
  rlogContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  bookPicture: {
    width: "100%",
    height: 180,
    resizeMode: "contain",
  },
  header_title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  count: {
    fontSize: 18,
  },
  book: {
    width: "45%",
    marginBottom: 8,
    height: 185,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 1,
  },
  rlog: {
    width: "100%",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 1,
  },
  selected: {
    borderColor: "blue",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  author: {
    fontSize: 14,
    marginBottom: 5,
  },
  isbn: {
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#954A98",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
