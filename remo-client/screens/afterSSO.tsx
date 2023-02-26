import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import jwt_decode from 'jwt-decode'

export default function AfterSSO() {
    const route = useRoute()
    const id = route.params?.idToken

    const decodedHeader = jwt_decode(id);
    const pic = decodedHeader.picture
    // console.log(decodedHeader)
    // const email = decodedHeader[email]
    // const route = useRoute()
    // const idtoken = route.params.idToken
    // const navigation = useNavigation();
    // navigation.
    // roAfute.params.paramKey
    


	return (
		<View style={styles.container}>
            <Image style={{width: 100, height: 100}} source={{uri:pic}}/>
            {/* images
        src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
        alt="car"
      /> */}
            <Text>
                name:  {decodedHeader.name}{ "\n"}
                given name:  {decodedHeader.given_name}{ "\n"}
                family name:  {decodedHeader.family_name} {"\n"}
                email:  {decodedHeader.email} {"\n"}            
            </Text>

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
	display: {
		position: "relative",
		top: 0,
		left: 0,
	},
});