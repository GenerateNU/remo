import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { AbsoluteCenter } from "@chakra-ui/react";

export default function BarcodeScanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcode, setBarcode] = useState<string | null>(null);

  const pressHandler = () => {
    navigation.goBack();
  }

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  useEffect(() => {
    console.log(barcode);
  }, [barcode]);

  // TODO; figure out how to type <type> and <data>
  const handleBarCodeScanned = ({ type: string, data: string }: ) => {
    setScanned(true);
    // check that this is indeed an isbn-13 or isbn-10 barcode
    // setBarcode(data);
    if (type === "org.gs1.EAN-13" && data.substring(0, 3) === "978") {
      // first, try retrieving the barcode from the database data -> retrieve
      // we want to error check this later
      setBarcode(data);

      if (!data) {
        const isbn10 = handleBarcodeConversion(data);
        setBarcode(isbn10);
      }

      // if it still doesn't exist, check the google api
      if (!data) {
        // google books implementation
      }
    } else if (type === "org.gs1.EAN-13" && data.substring(0, 3) === "979") {
      setBarcode(data);
      // if it still doesn't exist, check the google api
      if (!data) {
        // google books implementation
      }
    }
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.barcodeScanner}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <Text style={styles.display}>Barcode: {barcode}</Text>
      <StatusBar style="auto" />
      <Button title='back to home screen' onPress={pressHandler} />
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
    height: "60%",
    width: "100%",
    position: "relative",
    top: -90,
    left: 0,
  },
  display: {
    position: "relative",
    top: 0,
    left: 0,
  },
});
