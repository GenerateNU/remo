import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ReadingLog({ navigation }) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetch('https://59f3-2601-197-a7f-9c20-85ac-a311-ebf1-fa46.ngrok.io/v1/user_books/6')
      .then((response) => response.json())
      .then((data) => setBooks(data.slice(0,4)));
  }, []);

  const onBookPress = () => {
    navigation.navigate('AddReadingLog');
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
              >
              <>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text style={styles.isbn}>ISBN-13: {book.isbn_13}</Text>
              </>
            </TouchableOpacity>
          ))}
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