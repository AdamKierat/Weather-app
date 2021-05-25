import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import OldView from "./views/OldView";
import NormalView from "./views/NormalView";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { API_KEY } from "./utils/constants";
import AppLoading from "expo-app-loading";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  //CORDS
  const [currentlon, setCurrentlon] = useState();
  const [currentlat, setCurrentlat] = useState();

  //CITY PARMS
  const [city, setCity] = useState("Gliwice");
  const [temperature, setTemperature] = useState();
  const [pressure, setPressure] = useState();
  const [description, setDescription] = useState();
  const [country, setCountry] = useState();
  const [sunset, setSunset] = useState();
  const [sunrise, setSunrise] = useState();
  const [icon, setIcon] = useState();
  const [iconLink, setIconLink] = useState("http://openweathermap.org/img/wn/10d@2x.png");
  const [apiLoaded, setapiLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [counter, setCounter] = useState(0)

  const fetchWeather = (city) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setIsLoading(false);
        setCity(json.name);
        setTemperature(json.main.temp);
        setPressure(json.main.pressure);
        setDescription(json.weather[0].description);
        setCountry(json.sys.country);
        setSunrise(json.sys.sunrise);
        setSunset(json.sys.sunset);
        setIcon(json.weather[0].icon);
        setIconLink(`http://openweathermap.org/img/wn/${icon}@2x.png`);
        console.log("Używa API")

      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  let citySetter = (city) => {
    setCity(city);
  };

  if (apiLoaded == false) {
    return (
      <AppLoading
        startAsync={fetchWeather("Gliwice")}
        onFinish={() => {
          setapiLoaded(true);
          console.log("Api loaded");
        }}
        onError={console.warn}
      />
    );
  } else {
    return (

      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#4040a1"

          inactiveColor="#f0edf6"
          barStyle={{ backgroundColor: "#618685" }}
        >
          <Tab.Screen
            name="NormalView"
            options={{
              tabBarLabel: "YOUNG",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
          >
            {(props) => (
              <NormalView
                {...props}
                currentlon={currentlon}
                currentlat={currentlat}
                city={city}
                temperature={temperature}
                pressure={pressure}
                description={description}
                icon={icon}
                country={country}
                sunset={sunset}
                sunrise={sunrise}
                iconLink={iconLink}
                setCity={citySetter}
                fetchWeather={fetchWeather}
              />
            )}
          </Tab.Screen>
          <Tab.Screen
            name="OldView"
            options={{
              tabBarLabel: "OLD",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="biathlon"
                  color={color}
                  size={28}
                />
              ),
            }}
          >
            {(props) => (
              <OldView
                {...props}
                currentlon={currentlon}
                currentlat={currentlat}
                city={city}
                temperature={temperature}
                pressure={pressure}
                description={description}
                icon={icon}
                country={country}
                sunset={sunset}
                sunrise={sunrise}
                iconLink={iconLink}
                setCity={citySetter}
                fetchWeather={fetchWeather}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>

    );
  }
}
