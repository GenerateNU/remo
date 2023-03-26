import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ReadingLog({ navigation }) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const route = useRoute();
  const data = route.params?.data;
  
  useEffect(() => {
    fetch("https://00a6-155-33-134-66.ngrok.io/v1/user_books/${data.id}")
      .then((response) => response.json())
      .then((data) => setBooks(data.slice(0,4)));
  }, []);

  const onBookPress = () => {
    navigation.navigate('AddReadingLog', {data:data});
  };
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.header_title}>Currently Reading</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {books.map((book) => (
            <TouchableOpacity
              key={book.id}
              style={[
                styles.book,
                selectedBook && selectedBook.id === book.id && styles.selected,
              ]}
              onPress={() => {
                setSelectedBook(book)
                setShowPopup(true)
              }}
              >
              <>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text style={styles.isbn}>ISBN-13: {book.isbn_13}</Text>
              </>
            </TouchableOpacity>
          ))}
        {selectedBook && (
        Alert.alert(
          selectedBook.title,
          `Author: ${selectedBook.author}\nISBN-13: ${selectedBook.isbn_13}\nSynopsis: ${selectedBook.synopsis}`
        )
      )}
        </View>
      </ScrollView>
      <View style={styles.header}>
        <Text style={styles.header_title}>My Reading Log Reports</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {books.map((book) => (
            <TouchableOpacity
              key={book.id}
              style={[
                styles.book,
                selectedBook && selectedBook.id === book.id && styles.selected,
              ]}
              >
              <>
                <Text style={styles.title}>Book         </Text>
                <Text style={styles.author}>Author          </Text>
                <Text style={styles.isbn}>Date          </Text>
              </>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => onBookPress()}>
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
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header_title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 18,
  },
  book: {
    width: '22%',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 1,
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
