import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Alert,
  TouchableOpacity
} from 'react-native';

export default function AddReadingLog({navigation}) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const route = useRoute();
  const data = route.params?.data;
  
  useEffect(() => {
    fetch(`https://7beb-155-33-132-46.ngrok.io/v1/user_books/${data.id}`)
      .then((response) => response.json())
      .then((data) => setBooks(data.slice(0,4)));
  }, []);

  const onLogPress = () => {
    navigation.navigate('Timer', {data:selectedBook});
  };
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.header_title}>Select a book you're currently reading or checkout a new book.</Text>
      </View>
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
              console.log(selectedBook);
            }}>
            <>
              <Text style={styles.title}>{book.title}</Text>
              <Text style={styles.author}>{book.author}</Text>
              <Text style={styles.isbn}>ISBN-13: {book.isbn_13}</Text>
            </>
          </TouchableHighlight>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onLogPress()}>
        <Text style={styles.buttonText}>Add Reading Log</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0,
    borderBottomColor: '#ccc',
    marginBottom:5
  },
  header_title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 7
  },
  count: {
    fontSize: 18,
  },
  book: {
    width: '48%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  selected: {
    borderColor: 'blue',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
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
    borderBottomColor: '#ccc',
  },
  selectedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  selectedAuthor: {
    fontSize: 20,
  },
  selectedIsbn: {
    fontSize: 24,
    fontWeight: 'bold',
  },  
  selectedSynopsis: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'black',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
