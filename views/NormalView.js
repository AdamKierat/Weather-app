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
import Feather from "react-native-vector-icons/MaterialCommunityIcons";
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
  fetchWeather
}) => {
  const [cityHelper, setCityHelper] = useState("");
  const [dateNow, setDateNow] = useState();

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
          onSubmitEditing={() => {
            setCity(cityHelper)
            fetchWeather(cityHelper)
          }
          }
        />
        <FontAwesome
          name="search"
          onPress={() => fetchWeather(cityHelper)}
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
          paddingTop: 15,
          textAlign: 'center',
          fontSize: 20,
          fontWeight: "bold",
          color: "#ffffff",
        }}>{dateNow}</Text>

        <View style={{
          flex: 1,
          flexDirection: "row",
          paddingTop: 50,

        }}>
          <Text style={{
            paddingLeft: 30,
            fontSize: 65,
            fontWeight: "bold",
            color: "#ffffff",

          }}>{Math.round(temperature)} °  </Text>
          <Text style={{
            paddingTop: 20,
            fontSize: 30,
            fontWeight: "bold",
            color: "#ffffff",


          }}>{description}</Text>
        </View>
        <View style={{
          flex: 1,
          flexDirection: "row",
          paddingTop: 50,

        }}>
          <FontAwesome5
            name="wind"
            color="white"
            size={30}
            style={{ paddingLeft: 25, }}
          />
          <Text style={{

            fontSize: 25,
            fontWeight: "bold",
            color: "#ffffff",

          }}> Pressure   |</Text>

          <Text style={{

            fontSize: 25,
            fontWeight: "bold",
            color: "#ffffff",
            paddingLeft: 20
          }}>{pressure} hPa</Text>

        </View>
      </View>

      <View style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",

      }}>
        <View style={styles.suninfo}>
          <Image
            style={styles.sunriseinfoimagine}
            source={{
              uri: "https://pngimg.com/uploads/sun/sun_PNG13427.png",
            }}>
          </Image>
          <Text
            style={styles.suninfoText} >
            {getTimeToDisplay(new Date(sunrise * 1000))}</Text>

        </View>
        <View style={{ paddingLeft: 120, alignItems: 'center', }}>
          <Image
            style={styles.sunriseinfoimagine}
            source={{
              uri: "https://assets.stickpng.com/images/580b585b2edbce24c47b270b.png",
            }}></Image>
          <Text
            style={styles.suninfoText} >
            {getTimeToDisplay(new Date(sunset * 1000))}
          </Text>
        </View>
      </View>

    </View >
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
    width: 400,
    height: 160,
    aspectRatio: 1.9,
    paddingBottom: 10,


  },
  inputboxcontainer: {
    flexDirection: "row",
    padding: 10,

    height: 75
  },
  imagineHolder: {

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
    paddingLeft: 60,
    alignItems: 'center',
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
  }
})

export default NormalView;
