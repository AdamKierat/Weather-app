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
const OldView = ({
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
    inputboxcontainer: {
      flexDirection: "row",
      padding: 10,
      width: windowWidth,
      height: 75
    },
    imagineHolder: {
      paddingTop: 20,
      width: windowWidth,
      flex: 1,
      flexDirection: "row",
      height: 150,
    },
    infobox: {
      margin: 20,
      backgroundColor: "#6bb9e6",
      borderColor: "#acc7d6",
      borderWidth: 3.5,
      borderRadius: 20,
      height: 200,
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
      <Text style={{
        paddingTop: 15,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: "bold",
        color: "#ffffff",
      }}>{dateNow}</Text>
      <View style={styles.imagineHolder}>
        <Text style={{
          paddingLeft: 30,
          fontSize: 70,
          fontWeight: "bold",
          color: "#ffffff",
          width: 140,

        }}>{Math.round(temperature)}°</Text>
        <Image
          style={{
            width: windowWidth - 120,
            height: 150,
            paddingBottom: 10,
          }
          }
          source={{
            uri: iconLink,
          }}
        />
      </View>

      <View style={styles.infobox}>


        <View style={{
          flex: 1,
          flexDirection: "row",
          paddingTop: 50,
         
        }}>

          <Text style={{
            paddingTop: 20,
            fontSize: 25,
            fontWeight: "bold",
            color: "#ffffff",
            paddingLeft: 30,

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
            style={{ paddingLeft: 25 }}
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

      {/* <Text>Icon: {icon}</Text>
      <Text>Kraj: {country}</Text> */}
      <View style={{
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',

      }}>
        <View style={{ paddingLeft: 50, alignItems: 'center', }}>
          <Image
            style={{ height: 60, width: 100, aspectRatio: 1.5, }}

            source={{
              uri: "https://pngimg.com/uploads/sun/sun_PNG13427.png",
            }}>
          </Image>
          <Text style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#ffffff",
          }}>{getTimeToDisplay(new Date(sunrise * 1000))}</Text>

        </View>
        <View style={{ paddingLeft: 110, alignItems: 'center', }}>
          <Image
            style={{ height: 60, width: 100, aspectRatio: 1.25, }}
            source={{
              uri: "https://assets.stickpng.com/images/580b585b2edbce24c47b270b.png",
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

export default OldView;
