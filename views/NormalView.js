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

const NormalView = ({
  currentlon,
  currentlat,
  city,
  temperature,
  pressure,
  description,
  icon,
  country,
  sunset,
  sunrise,
  iconLink,
  setCity,
}) => {
  const [cityHelper, setCityHelper] = useState("");
  const [dateNow, setDateNow] = useState();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "#33d7ff",
    },
    textInput: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
    },
    image: {
      width: 200,
      height: 200,
    },
  });

  useEffect(() => {
    setDateNow(getCurrentDateTime(new Date(Date.now())));
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setCityHelper(text)}
        onSubmitEditing={() => setCity(cityHelper)}
      />
      <Text>Long: {currentlon}</Text>
      <Text>Lat: {currentlat}</Text>
      <Text>Czas teraz: {dateNow}</Text>
      <Text>Miasto: {city}</Text>
      <Text>Temp: {temperature}</Text>
      <Text>Cisnienie: {pressure}</Text>
      <Text>Opis: {description}</Text>
      <Text>Icon: {icon}</Text>
      <Text>Kraj: {country}</Text>
      <Text>Wschod: {getTimeToDisplay(new Date(sunrise * 1000))}</Text>
      <Text>Zachod: {getTimeToDisplay(new Date(sunset * 1000))}</Text>
      <Image
        style={styles.image}
        source={{
          uri: iconLink,
        }}
      />
    </View>
  );
};

export default NormalView;
