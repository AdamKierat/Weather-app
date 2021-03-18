import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OldView from './views/OldView'
import NormalView from './views/NormalView'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { API_KEY } from './utils/constants';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';

const Tab = createMaterialBottomTabNavigator();


export default function App() {

  //CORDS
  const [currentlon, setCurrentlon] = useState()
  const [currentlat, setCurrentlat] = useState()

  //CITY PARMS
  const [city, setCity] = useState("Gliwice")
  const [country, setCountry] = useState()
  const [temperature, setTemperature] = useState()
  const [sunset, setSunset] = useState()
  const [sunrise, setSunrise] = useState()
  const [pressure, setPressure] = useState()
  const [icon, setIcon] = useState()
  const [iconLink, setIconLink] = useState("")
  const [error, setError] = useState(null)
  const [apiLoaded, setapiLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true)


  function fetchWeather() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&units=metric&appid=${API_KEY}`
    )
      .then(res => res.json())
      .then((json) => {

        setCurrentlon(json.coord.lon)
        setCurrentlat(json.coord.lat)

        setCity(json.name)
        setCountry(json.sys.country)
        setTemperature(json.main.temp)
        setSunrise(json.sys.sunrise)
        setSunset(json.sys.sunset)

        setPressure(json.main.pressure)
        setIcon(json.weather.icon)

        setIsLoading(false)
      });
  }

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       fetchWeather(position.coords.latitude, position.coords.longitude);
  //     },
  //     error => setError('Error Getting Weather Condtions')
  //   );
  // }, [])
  if (apiLoaded == false) {
    return (
      <AppLoading
        startAsync={fetchWeather}
        onFinish={() => {
          setapiLoaded(true)
          console.log("Api loaded")
        }}
        onError={console.warn} />
    );
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: 'grey' }}
        >
          <Tab.Screen name="NormalView"

            options={{
              tabBarLabel: 'YOUNG',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />),

            }}
          >
            {(props) => <NormalView {...props}
              currentlon={currentlon}
              currentlat={currentlat}
              city={city}
              country={country}
              temperature={temperature}
              sunset={sunset}
              sunrise={sunrise}
              pressure={pressure}



            />}

          </Tab.Screen>
          <Tab.Screen
            name="OldView"
            options={{
              tabBarLabel: 'OLD',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />),
            }}
          >
            {(props) => <OldView {...props} temp={temperature} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>

    );
  }
};