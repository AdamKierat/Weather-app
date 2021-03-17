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
  const [isLoading, setIsLoading] = useState(true)
  const [temperature, setTemperature] = useState(0)
  const [sunset, setSunset] = useState(1551025128)
  const [sunrise, setSunrise] = useState(1550986740)
  const [pressure, setPressure] = useState(1004)
  const [weatherCondition, setWeatherCondition] = useState(null)
  const [error, setError] = useState(null)
  const [apiLoaded, setapiLoaded] = useState(false);

  function fetchWeather(lat = 55.4997, lon = -37.5597) {
    fetch(
      `http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=a785b12636ed229463fa77e0a6deb5be`
    )
      .then(res => res.json())
      .then(data => console.log(data))
      .then(json => {
        setSunrise(json.sys.sunrise * 1000)
        setSunset(json.sys.sunset * 1000)
        setTemperature(json.weather[0].main.temp)
        setPressure(json.weather[0].main.pressure)
        setWeatherCondition(json.weather[0].description)
        setIsLoading(false)
      });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => setError('Error Getting Weather Condtions')
    );
  }, [])
  if (apiLoaded == false) {
    return (
      <AppLoading
        startAsync={fetchWeather}
        onFinish={() => {
          setapiLoaded(true)
          console.log("Finish")
          console.log("weatherCondition: ", weatherCondition)
          console.log("sunrise: ", sunrise)
          console.log("sunset: ", sunset)
          console.log("temperature: ", temperature)
          console.log("pressure: ", pressure)
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
              weatherCondition={weatherCondition}
              sunrise={sunrise}
              sunset={sunset}
              temperature={temperature}
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