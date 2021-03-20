import React, { useState } from 'react';
import { Platform, Text, View, StatusBar, StyleSheet, Button, TextInput } from 'react-native';



const NormalView = ({ currentlon, currentlat, city, country, temperature, sunset, sunrise, pressure, fetchWeather }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            backgroundColor: "#33d7ff",

        },
    });

    const [miasto, setMiasto] = useState("")

    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => setMiasto(text)}
                onSubmitEditing={() => fetchWeather(miasto)}
            />
            <Button
                onPress={()=> fetchWeather(miasto)} >
            </Button>
            <Text>Miasto: {city}</Text>
            <Text>Long: {currentlon}</Text>
            <Text>Lat: {currentlat}</Text>
            <Text>Kraj: {country}</Text>
            <Text>Temp: {temperature}</Text>
            <Text>Wschod: {sunset}</Text>
            <Text>Zachod: {sunrise}</Text>
            <Text>Cisnienie: {pressure}</Text>

        </View>
    );

}

export default NormalView;