import React from 'react'
import {StatusBar} from 'expo-status-bar'
import {StyleSheet, View} from 'react-native'
import CurrentWeather from '@screens/CurrentWeather'
import UpcomingWeather from '@screens/UpcomingWeather'
import City from '@screens/City'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default function App() {
  return (
    <View style={styles.container}>
      <CurrentWeather />
      {/* <UpcomingWeather /> */}
      {/* <City /> */}
      <StatusBar style="auto" />
    </View>
  )
}
