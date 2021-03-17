import React from 'react';
import { Platform, Text, View, StatusBar, StyleSheet, Button } from 'react-native';



const NormalView = ({temp, setTemp}) => {
    const styles = StyleSheet.create({
        normalView: {
            flex: 1,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
    });
    
    console.log("xd", temp)
    return (
        <View style={styles.normalView}>
            <Text>{temp}</Text>
        </View>
    );

}

export default NormalView;