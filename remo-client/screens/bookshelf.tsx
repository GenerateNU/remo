import { useRoute,useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Alert,
  Image
} from "react-native";
import { findUserBooks } from "../services/book-services";
import NavBar from "../components/Navbar/navbar";


export default function Bookshelf() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const route = useRoute();
  const data = route.params?.data;
  const navigation = useNavigation();

  useEffect(() => {
    console.log(data);
  }, []);

  
  const findBooks = async () => {
    const userBooks = await findUserBooks(data.id);
    setBooks(userBooks);
  };
  useEffect(() => {
    findBooks();
  }, []);

  console.log()

  try{
        return(
          <View style={styles.container2}>
          <View style={styles.header}>
          <Text style={styles.header_title}>Bookshelf</Text>
          <Text style={styles.count}> {books.length} Books</Text>
           </View>
            <ScrollView>
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

                      <Image source={{ uri:  book.coverImage }} resizeMode="contain" style={styles.bookImage}/>

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
            <View style={styles.bot}>
                <NavBar navigation={navigation} data={data} />
              </View>
            </View>);
        }
  catch(e){
    return(
      <View style={styles.container2}>    
          <View style={styles.header}>
            <Text style={styles.header_title}>Bookshelf</Text>
            <Text style={styles.count}> 0 Books to Display</Text>
          </View>      
            <ScrollView>
            </ScrollView>
            <View style={styles.bot}>
                <NavBar navigation={navigation} data={data} />
              </View>
        </View>);
          }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
    marginBottom: 180,
    borderRadius: 10, // Set the border radius to create rounded rectangles
    overflow: 'hidden', 
    
  },
  container2: {
    flex: 1,
    backgroundColor: "white",
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
  bookImage: {
    width: '100%',
    height: 200,
  },
  bot: {
    flex: 1,
    position:"absolute",
    bottom:0,
  },
});
