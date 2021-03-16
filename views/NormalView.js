import React from 'react';
import { Platform, Text, View, StatusBar, StyleSheet, Button } from 'react-native';



const NormalView = () => {
    const styles = StyleSheet.create({
        mainview: {
            flex: 1,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
    });

    return (

        <View style={styles.mainview}>

            <Text>Welcome!</Text>
        </View>
    );

}

export default NormalView;