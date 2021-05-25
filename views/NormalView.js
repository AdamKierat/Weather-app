import React, { useState, useEffect } from "react";
import {
  Platform,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  useWindowDimensions
} from "react-native";

import { getTimeToDisplay, getCurrentDateTime } from "../utils/timeConverters";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Feather";
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const NormalView = ({
  city,
  temperature,
  pressure,
  description,
  sunset,
  sunrise,
  iconLink,
  setCity,
  fetchWeather,
}) => {
  const [cityHelper, setCityHelper] = useState("");
  const [dateNow, setDateNow] = useState();

  useEffect(() => {
    setDateNow(getCurrentDateTime(new Date(Date.now())));
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.inputboxcontainer}>
            <TextInput
              placeholder={city}
              style={styles.textInput}
              onChangeText={(text) => setCityHelper(text)}
              onSubmitEditing={() => {
                setCity(cityHelper);
                fetchWeather(cityHelper);
              }}
            />

            <FontAwesome
              name="search"
              onPress={() => fetchWeather(cityHelper)}
              style={{ margin: 8 }}
              color={"white"}
              size={40}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.imagineHolder}>
          <Image
            style={styles.image}
            source={{
              uri: iconLink,
            }}
          />
        </View>
        <View style={styles.infobox}>
          <Text
            style={{
              paddingTop: 15,
              textAlign: "center",
              fontSize: 25,
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            {dateNow}
          </Text>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              paddingTop: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                paddingLeft: 30,
                fontSize: 65,
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              {Math.round(temperature)} °{" "}
            </Text>
            <Text
              style={{
                paddingTop: 20,
                fontSize: 30,
                fontWeight: "bold",
                color: "#ffffff",
                paddingRight: 20,
              }}
            >
              {description}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              paddingTop: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#ffffff",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  transform: [{ rotate: "270deg" }],
                  marginLeft: 5,
                  marginTop: 5,
                }}
              >
                <Icon name="skip-back" color="#FFFFFF" size={23} />
              </View>{" "}
            Pressure{"  "}|
          </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#ffffff",
                paddingLeft: 20,
              }}
            >
              {pressure} hPa
          </Text>
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

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#2d9cdb",
    flex: 1,
  },
  textInput: {
    height: 50,
    width: 320,
    margin: 5,
    borderColor: "#fff",
    borderRadius: 20,
    borderWidth: 2,
    textAlign: "center",
    fontSize: 30,
    color: "#ffffff",
    textTransform: "uppercase",
    //fontFamily: "Overpass-Light",
    fontWeight: "bold",
    textAlign: "center"
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
  },
  infobox: {
    margin: 20,
    backgroundColor: "#6bb9e6",
    borderColor: "#acc7d6",
    borderWidth: 3.5,
    borderRadius: 20,
    height: 300,
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

export default NormalView;
