import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TextInput, View} from "react-native";
import BarcodeScanner from "../screens/barcodeScanner";
import { useNavigation } from "@react-navigation/native";

const SearchBar = (props) => {
  const navigation = props.navigation;
  const data = props.data;
  const navigateBarcode = () => {
    navigation.navigate("BarcodeScanner", {data: data});
  };

  return(
    <View style={styles.container}>
      <TextInput
          placeholder = "Search Book Title or Scan ISBN..."
          style = {styles.input}
          value={props.searchText}
          onChangeText={(text)=> props.setSearchText(text)}
          />
          <View style={{marginTop: 4}}>
          <AntDesign name="camerao" size={25} color="black" style={styles.icon} onPress={navigateBarcode}/>
          </View>
    </View>
  )
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    borderWidth: 1,
    margin: 25,
    paddingRight: 20,
  },
  input: {
    backgroundColor: "white", 
    color: "black",
    margin: 10,
  }, 
  icon: {
    position: "absolute",
    alignSelf: "center",
  }
})

function useRoute() {
  throw new Error("Function not implemented.");
}
