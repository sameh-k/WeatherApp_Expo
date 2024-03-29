import React, {useState, useEffect} from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Tabs from '@components/Tabs'
import {useGetWeather} from 'src/hooks/useGetWeather'
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export default function App() {
  const [loading, error, weather] = useGetWeather()

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
