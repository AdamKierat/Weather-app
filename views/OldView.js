import React, { useState, useEffect } from "react";
import {
  Platform,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { getTimeToDisplay, getCurrentDateTime } from "../utils/timeConverters";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const OldView = ({
  city,
  temperature,
  pressure,
  description,
  sunset,
  sunrise,
  iconLink,
  setCity,
}) => {
  const [cityHelper, setCityHelper] = useState("");
  const [dateNow, setDateNow] = useState();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "#2d9cdb",
      flex: 1,
    },
    textInput: {
      height: 60,
      width: 320,
      margin: 5,
      borderColor: "rgba(158, 150, 150, 0)",
      borderRadius: 20,
      borderWidth: 3.5,
      textAlign: "center",
      fontSize: 40,
      color: "#ffffff",
      textTransform: "uppercase",
      // fontFamily: "Overpass-Light",
      fontWeight: "bold",
    },
    image: {
      width: 400,
      height: 160,
      aspectRatio: 1.9,
      paddingBottom: 10,
    },
    inputboxcontainer: {
      flexDirection: "row",
      padding: 10,

      height: 75,
    },
    imagineHolder: {
      alignItems: "center",
      height: 150,
      flex: 1,
      flexDirection: "row",
      marginTop: 10
    },
    infobox: {
      margin: 20,
      backgroundColor: "#6bb9e6",
      borderColor: "#acc7d6",
      borderWidth: 3.5,
      borderRadius: 20,
      height: 250,
      marginTop: 45,
    },
    suninfo: {
      paddingLeft: 60,
      alignItems: "center",
    },
    suninfoText: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#ffffff",
    },
    sunriseinfoimagine: {
      height: 60,
      width: 100,
      aspectRatio: 1.3,
    },
  });

  useEffect(() => {
    setDateNow(getCurrentDateTime(new Date(Date.now())));
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <View style={styles.inputboxcontainer}>
          <TextInput
            placeholder={city}
            style={styles.textInput}
            onChangeText={(text) => setCityHelper(text)}
            onSubmitEditing={() => setCity(cityHelper)} />
          <FontAwesome
            name="search"
            style={{ margin: 8 }}
            color={"white"}
            size={40} />
        </View>
        <Text style={{
          paddingTop: 15,
          textAlign: 'center',
          fontSize: 35,
          fontWeight: "bold",
          color: "#ffffff",
          marginBottom: 15,
        }}>{dateNow}</Text>
        <View style={styles.imagineHolder}>
          <Text style={{
            paddingLeft: 30,
            fontSize: 75,
            fontWeight: "bold",
            color: "#ffffff",
            width: 150,
          }}>{Math.round(temperature)}°</Text>
          <Image
            style={{
              width: windowWidth - 120,
              height: 150,
              paddingBottom: 10,
            }}
            source={{
              uri: iconLink,
            }}
          />
        </View>
        <View style={styles.infobox}>
          <View style={{
            flex: 1,
            alignContent: "center"

          }}>
            <Text style={{
              paddingTop: 30,
              fontSize: 45,
              fontWeight: "bold",
              color: "#ffffff",
              paddingLeft: 30,
              alignItems: "center"
            }}>{description}</Text>
          </View>
          <View style={{
            flex: 1,
            flexDirection: "row",
            paddingTop: 80,
          }}>
            <FontAwesome5
              name="wind"
              color="white"
              size={30}
              style={{ paddingLeft: 10 }}
            />
            <Text style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#ffffff",
            }}> Pressure  |</Text>
            <Text style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#ffffff",
              paddingLeft: 15
            }}>{pressure} hPa</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-end",
          }}>
          <View style={styles.suninfo}>
            <Icon name="sunrise" color="#FFFFFF" size={49} />
            <Text style={styles.suninfoText}>
              {getTimeToDisplay(new Date(sunrise * 1000))}
            </Text>
          </View>
          <View style={{ paddingLeft: 120, alignItems: "center" }}>
            <Icon name="sunset" color="#FFFFFF" size={49} />
            <Text style={styles.suninfoText}>
              {getTimeToDisplay(new Date(sunset * 1000))}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OldView;
