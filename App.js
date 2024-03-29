import React from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Tabs from '@components/Tabs'
import {useGetWeather} from 'src/hooks/useGetWeather'
import ErrorItem from '@components/ErrorItem'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default function App() {
  const [loading, error, weather] = useGetWeather()

  if (weather) {
    console.log(weather)
  }

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  )
}
