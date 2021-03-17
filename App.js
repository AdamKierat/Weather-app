import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OldView from './views/OldView'
import NormalView from './views/NormalView'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { API_KEY } from './utils/constants';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();


export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [temperature, setTemperature] = useState(0)
  const [sunset, setSunset] = useState(1551025128)
  const [sunrise, setSunrise] = useState(1550986740)
  const [pressure, setPressure] = useState(1004)
  const [weatherCondition, setWeatherCondition] = useState(null)
  const [error, setError] = useState(null)

  function fetchWeather(lat = 50.2833, lon = 18.6667) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        setSunrise(json.sys.sunrise * 1000)
        setSunset(json.sys.sunset * 1000)
        setTemperature(json.main.temp)
        setPressure(json.main.pressure)
        setWeatherCondition(json.weather[0].main)
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
          {(props) => <NormalView {...props} temp={temperature} setTemp={setTemperature} />}
        </Tab.Screen>
        <Tab.Screen
          name="OldView"
          options={{
            tabBarLabel: 'OLD',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />),
          }}
        >
          {(props) => <OldView {...props} temp={temperature} setTemp={setTemperature} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};