import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // computation
    let strData = data.toString();
    if (strData.length == 10) {
      strData = handleBarcodeConversion(strData);
    } else {
    }
    // we want to error check this later
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const handleBarcodeConversion = (barcode: string) => {
    // hardcoded length values because this will only be called in instances
    // of conversion of isbn-10 to isbn-13
    let res: string = "978" + barcode.substring(0, 9);

    let sum: number = 0;
    // step 3 of the process
    for (var i = 0; i < 12; i++) {
      let tempNum: number;
      if (i % 2 == 0) {
        tempNum = +res.substring(i, i + 1);
      } else {
        tempNum = +res.substring(i, i + 1) * 3;
      }
      sum += tempNum;
    }

    // step 4
    const remaind = sum % 10;
    var lastDig = remaind == 0 ? "0" : (10 - remaind).toString();
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
      <Text>Open up App.tsx to start working on your app!</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.barcodeScanner}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <StatusBar style="auto" />
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
    position: "absolute",
    top: 0,
    left: 0,
  },
});
