import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Alert,
} from "react-native";

export default function Bookshelf() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const route = useRoute();
  const data = route.params?.data;

  useEffect(() => {
    console.log(data);
  }, []);

  useEffect(() => {
    // var fetch_string = 'https://e8ac-2601-197-701-1030-e8be-e202-d14c-b4c4.ngrok.io/v1/user_books/' + String({data.id});
    fetch(`https://bbf3-155-33-132-9.ngrok.io/v1/user_books/${data.id}`).then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(data.id);
  console.log(books);

  // TO DO: get proper data representation for 
  // checked out books and recently read books 
  const checkedOutBooks; 
  const recentlyReadBooks; 

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.header_title}>Bookshelf</Text>
        <Text style={styles.count}>{books.length} Books</Text>
      </View>

      {/* Representing the block to handle checkedOutBooks */}
      {//checkedOutBooks.length 
      (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Checked Out Books</Text>
          <View style={styles.container}>
            {checkedOutBooks.map((book) => (
              <TouchableHighlight
                key={book.id}
                style={[
                  styles.book,
                  selectedBook && selectedBook.id === book.id && styles.selected,
                ]}
                underlayColor="#ccc"
                onPress={() => {
                  setSelectedBook(book)
                  setShowPopup(true)
                }}>
                <>
                  <Text style={styles.title}>{book.title}</Text>
                  <Text style={styles.author}>{book.author}</Text>
                  <Text style={styles.isbn}>ISBN-13: {book.isbn_13}</Text>
                </>
              </TouchableHighlight>
            ))}
          </View>
        </View>
      )}


       {/* Representing the block to handle recentlyReadBooks */}
       {//recentlyReadBooks.length 
       (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently Read Books</Text>
          <View style={styles.container}>
            {recentlyReadBooks.map((book) => (
              <TouchableHighlight
                key={book.id}
                style={[
                  styles.book,
                  selectedBook && selectedBook.id === book.id && styles.selected,
                ]}
                underlayColor="#ccc"
                onPress={() => {
                  setSelectedBook(book)
                  setShowPopup(true)
                }}>
                <>
                  <Text style={styles.title}>{book.title}</Text>
                  <Text style={styles.author}>{book.author}</Text>
                  <Text style={styles.isbn}>ISBN-13: {book.isbn_13}</Text>
                </>
              </TouchableHighlight>
            ))}
          </View>
        </View>
      )}
      
      <View style={styles.container}>
        {books.map((book) => (
          <TouchableHighlight
            key={book.id}
            style={[
              styles.book,
              selectedBook && selectedBook.id === book.id && styles.selected,
            ]}
            underlayColor="#ccc"
            onPress={() => {
              setSelectedBook(book);
              setShowPopup(true);
            }}
          >
            <>
              <Text style={styles.title}>{book.title}</Text>
              <Text style={styles.author}>{book.author}</Text>
              <Text style={styles.isbn}>ISBN-13: {book.isbn_13}</Text>
            </>
          </TouchableHighlight>
        ))}
      </View>
      {selectedBook &&
        Alert.alert(
          selectedBook.title,
          `Author: ${selectedBook.author}\nISBN-13: ${selectedBook.isbn_13}\nSynopsis: ${selectedBook.synopsis}`
        )}
    </ScrollView>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  header_title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  count: {
    fontSize: 18,
  },
  book: {
    width: "48%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
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
});
