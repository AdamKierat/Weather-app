import React from 'react';
import { Platform, Text, View, StatusBar, StyleSheet, Button } from 'react-native';



const NormalView = ({ weatherCondition, sunrise, sunset, temperature, pressure }) => {
    const styles = StyleSheet.create({
        normalView: {
            flex: 1,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
    });
    // console.log("weatherCondition: ", weatherCondition)
    // console.log("sunrise: ", sunrise)
    // console.log("sunset: ", sunset)
    // console.log("temperature: ", temperature)
    // console.log("pressure: ", pressure)

    return (
        <View style={styles.normalView}>
            <Text>{temperature}</Text>

        </View>
    );

}

export default NormalView;