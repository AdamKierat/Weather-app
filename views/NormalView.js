import React from 'react';
import { Platform, Text, View, StatusBar, StyleSheet, Button, TextInput } from 'react-native';



const NormalView = ({ currentlon, currentlat, city, country, temperature, sunset, sunrise, pressure }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            backgroundColor: "#33d7ff",

        },
    });
    // console.log("weatherCondition: ", weatherCondition)
    // console.log("sunrise: ", sunrise)
    // console.log("sunset: ", sunset)
    // console.log("temperature: ", temperature)
    // console.log("pressure: ", pressure)

    return (
        <View style={styles.container}>
            <TextInput>

            </TextInput>
            <Text>{currentlon}</Text>
            <Text>{currentlat}</Text>
            <Text>{city}</Text>
            <Text>{country}</Text>
            <Text>{temperature}</Text>
            <Text>{sunset}</Text>
            <Text>{sunrise}</Text>
            <Text>{ }</Text>



        </View>
    );

}

export default NormalView;