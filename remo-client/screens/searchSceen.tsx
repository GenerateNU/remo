// Home.js
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import PressableSearch from "../components/pressablecard/pressableSearch";
import SearchBar from "../components/Search/searchBar";
import Data from "../components/mock-data.json";
import { Button } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { findAllBooks } from "../services/book-services";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

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
    const filteredItems = Data.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredItems.length === 0) {
      return;
    } else {
      return filteredItems;
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.option}>
        <PressableSearch content={item.title} />
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
});
