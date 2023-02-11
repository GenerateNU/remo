import { StatusBar } from "expo-status-bar";
import React from "react";
import BarcodeScanner from './barcodeScanner';
import { NavigationContainer, useNavigation, Stack } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
   

    const pressHandler = () => {
        navigation.navigate("BarcodeScanner")
    }

    return (
        <View style={styles.container}>
            <Text >Home Screen</Text>
            <Button title="Scan a Book" onPress={pressHandler}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})