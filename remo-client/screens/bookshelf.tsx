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
        <View style={styles.header}>
        <Text style={styles.header_title}>Bookshelf</Text>
        <Text style={styles.count}>{books.length} Books</Text>
      </View>
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
