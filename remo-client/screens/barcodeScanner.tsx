import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";
import { findBookBarcode } from "../services/book-services";
import { findGoogleBook } from "../services/google-services";
import { BarCodeScanner } from "expo-barcode-scanner";
import { BarcodeResponse } from "../types/index";
import { useNavigation, useRoute } from "@react-navigation/native";
import NavBar from "../components/Navbar/navbar";

export default function BarcodeScanner() {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params?.data;
  // const data = route.params?.data;

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcode, setBarcode] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState<string[]>([]);
  const [published, setPublished] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [bookCover, setBookCover] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [loading, setLoading] = useState(false);

  const [popUp, setPopUp] = useState(false);

  const newData = {
    ...data,
    title: title,
    author: author,
    barcode: barcode,
    published: published,
    pageCount: pageCount,
    bookCover: bookCover,
    synopsis: synopsis,
    pageVisited: "BarcodeScanner",
  };

  const pressHandler = () => {
    // navigation.goBack();
  };

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
    console.log("wowza", data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [barcode]);

  useEffect(() => {
    if (bookCover !== "") {
      console.log("reached into the book cover branch");
      Alert.alert(
        "Book Scanned",
        `${title} by ${author} has been scanned! Do you want to see more information?`,
        [
          {
            text: "Cancel",
            onPress: () => {
              console.log("Canceled");
              setPopUp(false);
              setLoading(false);
            },
          },
          {
            text: "Ok",
            onPress: () => {
              console.log("navigating");
              setLoading(false);
              setPopUp(false);
              navigation.navigate("BookInfo", {
                data: newData,
              });
            },
          },
        ]
      );
      setPopUp(true);
    }
  }, [published, author, published, pageCount, synopsis, bookCover]); //

  const fetchData = async () => {
    if (barcode !== null) {
      console.log(barcode, " -> fetched barcode");
      const data = await findBookBarcode(barcode);
      console.log(JSON.stringify(data));
      const objString =
        '{"id":"","title":"","author":"","isbn_13":"","isbn_10":"","subtitle":"","publish_date":"","page_count":"","synopsis":"","user_id":""}';

      console.log(objString === JSON.stringify(data));
      if (objString === JSON.stringify(data)) {
        await fetchGoogle();
      } else {
        await updateTitleAndAuthor(data);
        await setLargestImage();
      }
    }
  };

  const updateTitleAndAuthor = (book: JSON) => {
    const obj = JSON.parse(JSON.stringify(book));
    setTitle(obj.title);
    setAuthor(obj.author);
    setPublished(obj.published_date);
    setPageCount(obj.page_count);
    setSynopsis(obj.synopsis);
  };

  const resetScan = () => {
    setScanned(false);
    setBarcode(null);
    setTitle("");
    setAuthor([]);
    setPublished("");
    setPageCount("");
    setBookCover("");
    setSynopsis("");
    setLoading(false);
  };

  const fetchGoogle = async () => {
    if (barcode !== null) {
      console.log(barcode, " -> google fetched barcode");
      const data = await findGoogleBook(barcode);
      await updateTitleAndAuthorGoogle(data);
    }
  };

  const updateTitleAndAuthorGoogle = (book: any) => {
    const obj = book.items[0].volumeInfo;
    setTitle(obj.title);
    setAuthor(obj.authors);
    setSynopsis(obj.description);
    setPageCount(obj.pageCount);
    setPublished(obj.publishedDate);
    const imageLinks = obj.imageLinks;
    const arr = Object.entries(imageLinks);
    const lastValue = arr[arr.length - 1][1];
    setBookCover(lastValue);
  };

  const setLargestImage = async () => {
    console.log(barcode, " -> google fetched barcode");
    if (barcode !== null) {
      const data = await findGoogleBook(barcode);
      const obj = data.items[0].volumeInfo;
      const imageLinks = obj.imageLinks;
      const arr = Object.entries(imageLinks);
      const lastValue = arr[arr.length - 1][1];
      setBookCover(lastValue);
    }
  };

  // TODO; figure out how to type <type> and <data>
  const handleBarCodeScanned = async ({ type, data }: BarcodeResponse) => {
    setScanned(true);
    setLoading(true);
    // check that this is indeed an isbn-13 or isbn-10 barcode
    // setBarcode(data);
    if (type === "org.gs1.EAN-13" && data.substring(0, 3) === "978") {
      // first, try retrieving the barcode from the database data -> retrieve
      // we want to error check this later
      setBarcode(data);
    } else if (type === "org.gs1.EAN-13" && data.substring(0, 3) === "979") {
      setBarcode(data);
    }
  };

  const handleBarcodeConversion = (barcode: string) => {
    // hardcoded length values because this will only be called in instances
    // of conversion of isbn-13 to isbn-10
    let res: string = barcode.substring(3, 12);

    let sum: number = 0;
    let multiplier: number = 10;
    // step 3 of the process
    for (var i = 0; i < 12; i++) {
      let tempNum: number;
      tempNum = +res.substring(i, i + 1) * multiplier;
      multiplier -= 1;
      sum += tempNum;
    }

    // step 4
    const remaind = sum % 11;
    var lastDig = remaind == 0 ? "0" : (11 - remaind).toString();
    res += lastDig;
    return res;
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.textSectionTop}>
        <Text>Scan 12 or 13 digit ISBN code below.</Text>
      </View>
      <View style={styles.bcodeContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={[styles.barcodeScanner]}
        />
      </View>
      <View style={styles.textSection}>
        {scanned && <Button title={"Tap to Scan Again"} onPress={resetScan} />}
        {loading && (
          <View>
            <ActivityIndicator />
            <Text>Loading...</Text>
          </View>
        )}
        <StatusBar style="auto" />
      </View>
      <View style={styles.navBar}>
        <NavBar navigation={navigation} data={data} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  barcodeScanner: {
    height: "100%",
    width: "100%",
  },
  bcodeContainer: {
    flex: 3,
    height: "100%",
    width: "90%",
    borderRadius: 30,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  textSection: {
    flex: 3,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textSectionTop: {
    flex: 1,
    height: "100%",
    width: "100%",
    paddingLeft: "5%",
    justifyContent: "flex-end",
    paddingBottom: 8,
    alignItems: "flex-start",
  },
  navBar: {
    flex: 1,
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
  },
  display: {
    position: "relative",
    top: 0,
    left: 0,
  },
});
