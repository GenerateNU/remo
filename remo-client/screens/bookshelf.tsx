import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserBookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    fetch('https://9390-2601-197-a7f-9c20-3cb2-d248-7f7-28c6.ngrok.io/v1/user_books/6')
      .then(response => response.json())
      .then(data => setBookshelf(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.bookshelf}>
      {bookshelf.map(book => (
        <View style={styles.book} key={book.id}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>Author: {book.author}</Text>
          <Text>ISBN 13: {book.isbn_13}</Text>
          <Text>ISBN 10: {book.isbn_10}</Text>
          <Text>Page Count: {book.page_count}</Text>
          <Text>Synopsis: {book.synopsis}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bookshelf: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  book: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default UserBookshelf;
