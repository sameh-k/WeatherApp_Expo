import React, {useState, useEffect} from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Tabs from '@components/Tabs'

import * as Location from 'expo-location'

import {WEATHER_API_KEY} from '@env'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
        )
        const data = await res.json()
        setWeather(data)
      } catch (e) {
        setError('Could not fetch Weather')
      } finally {
        setLoading(false)
      }
    }

    ;(async () => {
      let {status} = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('permission to access location was denied!')
        return
      }

      let locationAsync = await Location.getCurrentPositionAsync({})
      setLatitude(locationAsync.coords.latitude)
      setLongitude(locationAsync.coords.longitude)
      if (latitude != null && longitude != null) {
        await fetchWeatherData()
      }
    })()
  }, [latitude, longitude])

  if (weather) {
    console.log(weather)
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}
