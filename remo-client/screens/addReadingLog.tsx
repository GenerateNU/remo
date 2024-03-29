import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
} from "react-native";
import { findUserBooks } from "../services/book-services";
import NavBar from "../components/Navbar/navbar";

export default function AddReadingLog({ navigation }) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState<JSON | null>(null);
  const [bookCover, setBookCover] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const route = useRoute();
  const data = route.params?.data;

  useEffect(() => {
    getReadingLogBooks();
  }, []);
  const getReadingLogBooks = async () => {
    let readingLogBooks = await findUserBooks(data.id);
    readingLogBooks = readingLogBooks.slice(0, 4);
    setBooks(readingLogBooks);
  };

  const fetchGoogle = async () => {
    if (data.isbn !== null) {
      const googleData = await findGoogleBook(data.isbn);
      await updateCover(googleData);
    }
  };

  const onLogPress = () => {
    const newData = {
      ...selectedBook,
      ...data,
    };

    navigation.navigate("ReadingLogFlow", { data: newData });
  };

  const addLog = () => {
    if (selectedBook !== null) {
      onLogPress();
    }
  };
  return (
    <View style={styles.bound}>
      <View style={styles.top}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.header_title}>
              Select a book you're currently reading or checkout a new book:
            </Text>
          </View>
          <View style={styles.container}>
            {books.map((book) => (
              <TouchableHighlight
                key={book.id}
                style={[
                  styles.book,
                  selectedBook &&
                    selectedBook.id === book.id &&
                    styles.selected,
                ]}
                underlayColor="#ccc"
                onPress={() => {
                  setSelectedBook(book);
                  console.log(selectedBook);
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
              </TouchableHighlight>
            ))}
          </View>
          <TouchableOpacity style={styles.button} onPress={() => addLog()}>
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
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },
  bookPicture: {
    width: "100%",
    height: 160,
    resizeMode: "contain",
  },
  bookContainer: {
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    height: 160,
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
  bound: {
    flex: 1,
    width: "100%",
  },
  top: {
    flex: 7,
    width: "100%",
  },
  bot: {
    flex: 1,
    width: "100%",
  },
  select: {
    color: "purple",
    fontSize: 15,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0,
    borderBottomColor: "#ccc",
    marginBottom: 5,
  },
  header_title: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 7,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 10,
  },
  count: {
    fontSize: 18,
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
  selectedBook: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  selectedAuthor: {
    fontSize: 20,
  },
  selectedIsbn: {
    fontSize: 24,
    fontWeight: "bold",
  },
  selectedSynopsis: {
    fontSize: 24,
    fontWeight: "bold",
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
