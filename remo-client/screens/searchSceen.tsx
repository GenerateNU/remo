// Home.js
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import PressableSearch from "../components/pressablecard/pressableSearch";
import SearchBar from "../components/Search/searchBar";
import Data from "../components/mock-data.json";
import { Button } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { findAllBooks } from "../services/book-services";

// TODO: optimize loading and searching
const SearchScreen = () => {

  const [searchText, setSearchText] = useState("");
  const [books, setData] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();
  const paramData = route.params?.data;


  useEffect(() => {
    allBooks();
  }, []);

  const allBooks = async () => {
    const books = await findAllBooks();
    setData(books);
  };

  const filterData = () => {
    const filteredItems = books.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredItems.length === 0) {
      return;
    } else {
      return filteredItems;
    }
  };

  const renderItem = ({ item }) => {
    const newData = {
      ...paramData,
      title: item.title,
      author: item.author,
      barcode: item.isbn_13,
      published: item.publish_date,
      pageCount: item.page_count,
      synopsis: item.synopsis,
      pageVisited: "Search",
    };
    return (
      <View style={styles.option}>
        <TouchableOpacity style={styles.bookbutton} onPress={() => navigation.navigate("BookInfo", {data: newData,})}>
          <Text style={styles.booktext}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        navigation={navigation}
        data={paramData}
      />
      <View style={styles.option}>
        <FlatList
          data={filterData()}
          numColumns={3}
          keyExtractor={(item) => item.title}
          renderItem={renderItem}
          ListEmptyComponent={
            <View>
              <Text style={styles.text}>
                {" "}
                Don't See What You're Looking For?{" "}
              </Text>
              <Button
                titleStyle={{ color: "black", fontSize: 17 }}
                title="Search for More Books Here"
                buttonStyle={styles.button}
              />
            </View>
          }
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  results: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignSelf: "stretch",
    width: "120%",
  },

  option: {
    flex: 1,
    margin: 8,
    backgroundColor: "white",
    flexDirection: "row",
  },

  text: {
    margin: 15,
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    margin: 20,
  },
  bookbutton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    width: 110,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  booktext: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});
