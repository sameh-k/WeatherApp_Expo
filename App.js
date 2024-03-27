import React from 'react'
import {StatusBar} from 'expo-status-bar'
import {StyleSheet, View} from 'react-native'
import CurrentWeather from './src/components/CurrentWeather'
import UpcomingWeather from './src/components/UpcomingWeather'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      <UpcomingWeather />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
