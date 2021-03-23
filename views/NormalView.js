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
import { Dimensions } from 'react-native';

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
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

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
      borderColor: "#ffffff",
      borderRadius: 20,
      borderWidth: 3.5,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
      color: "#ffffff",
      textTransform: "uppercase",
    },
    image: {
      width: windowWidth - 100,
      height: 180,

    },
    inputboxcontainer: {
      flexDirection: "row",
      padding: 10,
      width: windowWidth,
      height: 75
    },
    imagineHolder: {
      width: windowWidth,
      alignItems: 'center',
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
      width: windowWidth,

    }
  });

  useEffect(() => {
    setDateNow(getCurrentDateTime(new Date(Date.now())));
  }, []);

  return (
    <View style={styles.container}>

      {/* <Text>Long: {currentlon}</Text>
      <Text>Lat: {currentlat}</Text> */}
      <View style={styles.inputboxcontainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setCityHelper(text)}
          onSubmitEditing={() => setCity(cityHelper)} />
        <FontAwesome
          name="search"
          style={{ margin: 8 }}
          color={"white"}
          size={40} />
      </View>
      <View style={styles.imagineHolder}>
        <Image
          style={styles.image
          }
          source={{
            uri: iconLink,
          }}
        />
      </View>

      <View style={styles.infobox}>
        <Text style={{
          textAlign: 'center',
          fontSize: 22,
          fontWeight: "bold",
          color: "#ffffff",
        }}>{dateNow}</Text>

        <View style={{
          flex: 1,
          flexDirection: "row",


        }}>
          <Text style={{
            padding: (10, 20, 0, 10),
            fontSize: 40,
            fontWeight: "bold",
            color: "#ffffff",

          }}>{Math.round(temperature)}°C</Text>
          <Text style={{
            padding: (10, 20, 0, 10),
            fontSize: 25,
            fontWeight: "bold",
            color: "#ffffff",
          }}>{description}</Text>
        </View>


      </View>

      {/* <Text>Icon: {icon}</Text>
      <Text>Kraj: {country}</Text> */}
      <View style={{
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',

      }}>
        <View style={{ paddingLeft: 25, alignItems: 'center', }}>
          <Image
            style={{ height: 50, width: 100 }}
            source={{
              uri: "http://openweathermap.org/img/wn/01d@2x.png",
            }}>
          </Image>
          <Text style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#ffffff",
          }}>{getTimeToDisplay(new Date(sunrise * 1000))}</Text>

        </View>
        <View style={{ paddingLeft: 95, alignItems: 'center', }}>
          <Image
            style={{ height: 50, width: 100 }}
            source={{
              uri: "http://openweathermap.org/img/wn/01n@2x.png",
            }}>
          </Image>
          <Text style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#ffffff",
          }} >{getTimeToDisplay(new Date(sunset * 1000))}</Text>

        </View>
      </View>
    </View>
  );
};

export default NormalView;
