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
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
    console.log("--------------------------------");

    console.log(readingLogs);
    console.log("--------------------------------");
  };

  const onBookPress = () => {
    navigation.navigate("AddReadingLog", { data: data });
  };
  return (
    <View style={styles.bound}>
      <View style={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.header_title}>Currently Reading</Text>
        </View>
        <View style={styles.bookshelf}>
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
        </View>
        <View style={styles.header}>
          <Text style={styles.header_title}>My Reading Log Reports</Text>
        </View>
        <View style={styles.readingLogs}>
          <ScrollView style={{ width: "100%" }}>
            <View style={styles.rlogContainer}>
              <View style={styles.rlogsShadow}>
                <View style={styles.rlogsListItem}>
                  {rlogs.map((rlog) => (
                    <TouchableOpacity style={[styles.rlog]}>
                      <View style={styles.comRow}>
                        <MaterialCommunityIcons
                          name="bookmark-plus"
                          size={36}
                          color="orange"
                        />

                        <View style={styles.innerContent}>
                          <Text style={styles.title}>
                            Book title; {rlog.book_id}
                          </Text>
                          <View>
                            <View style={styles.rlog_row}>
                              <Text>Date</Text>
                              <Text>
                                {rlog.total_pages} pages; {rlog.total_time}{" "}
                                minutes
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomButton}>
          <TouchableOpacity style={styles.button} onPress={() => onBookPress()}>
            <Text style={styles.buttonText}>Add Reading Log</Text>
          </TouchableOpacity>
        </View>
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
  innerContent: {
    marginLeft: 10,
    marginRight: 12,
    width: "100%",
  },
  rlog_row: {
    flexDirection: "row",
    width: "82%",
    justifyContent: "space-between",
  },
  comRow: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  scroll: {
    flex: 9,
  },
  bookshelf: {
    flex: 3,
    width: "100%",
  },
  readingLogs: {
    flex: 2,
    width: "100%",
  },
  bottomButton: {
    flex: 1,
    width: "100%",
  },
  scrollWrap: {
    flexWrap: "wrap",
  },
  bot: {
    flex: 1,
  },
  bookContainer: {
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
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
  rlogsListItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    overflow: "hidden",
  },
  rlogsShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    height: 160,
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
    width: "30%",
    marginBottom: 8,
    height: 160,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 1,
  },
  rlog: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
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
