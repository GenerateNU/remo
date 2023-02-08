import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('BarcodeScanner')
    }

    return (
        <View style={styles.container}>
            <Button title="Scan a Book" color="orange" onPress={pressHandler}></Button>
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