import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Alert,
} from "react-native";
import SearchBar from "../components/searchBar";
import Data from "../components/mock-data.json";


export default function Bookshelf() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const paramData = route.params?.data;
  const [searchText, setSearchText] = useState("");
  // const [checkedOutBooks, setCheckedOutBooks] = useState({})
  // const [recentlyReadBooks, setRecentlyReadBooks] = useState({})

  useEffect(() => {
    console.log(paramData);
  }, []);

  useEffect(() => {
    // var fetch_string = 'https://e8ac-2601-197-701-1030-e8be-e202-d14c-b4c4.ngrok.io/v1/user_books/' + String({data.id});
    fetch(`https://19ce-155-33-133-32.ngrok.io/v1/user_books/${paramData.id}`).then((response) => response.json())
      .then((data) => {setBooks(data)});
  }, []);
  console.log(paramData.id);
  console.log(books);


  function filter() {
    const filteredItems = books.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredItems.length === 0) {
      return [];
    } else {
      return filteredItems;
    }
  }
  
  // TO DO: get proper data representation for 
  // checked out books and recently read books 
  // v1/checkout_book/:bookId/:userId
  // fetch()


  // const checkedOutBooks; 
  // const recentlyReadBooks; 

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.header_title}>Bookshelf</Text>
        <Text style={styles.count}>{books.length} Books</Text>
      </View>
      
      <SearchBar searchText={searchText} setSearchText={setSearchText} navigation={navigation} data={paramData} />
      {/* Representing the block to handle checkedOutBooks */}
      {//checkedOutBooks.length 
      (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Checked Out Books</Text>
          <View style={styles.container}>
            {filter().map((book) => (
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
            {books.map((book) => (
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
      
      {/* <View style={styles.container}>
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
      </View> */}
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
