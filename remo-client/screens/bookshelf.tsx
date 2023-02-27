import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Bookshelf() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://9390-2601-197-a7f-9c20-3cb2-d248-7f7-28c6.ngrok.io/v1/user_books/6')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {books.map((book) => (
          <View style={styles.book} key={book.id}>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>{book.author}</Text>
            <Text style={styles.isbn}>ISBN-13: {book.isbn_13}</Text>
            <Text style={styles.synopsis}>{book.synopsis}</Text>
          </View>
        ))}
      </View>
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
  book: {
    width: '48%',
    marginBottom: 20,
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
  synopsis: {
    fontSize: 14,
  },
});
