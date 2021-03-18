import React from 'react';
import { Platform, Text, View, StatusBar, StyleSheet, Button, TextInput } from 'react-native';


const OldView = () => {
    const styles = StyleSheet.create({
        oldView: {
            flex: 1,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
    });

    const [miasto, setMiasto] = React.useState('');
    return (

        <View style={styles.oldView}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setMiasto(text)}
                miasto={miasto}
            />

            <Text>{() => {
                console.log(new Date(obj.dt * 1000 - (obj.timezone * 1000)))
            }}</Text>
        </View>
    );

}

export default OldView;