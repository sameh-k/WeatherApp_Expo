import React from 'react'
import {StyleSheet, Text, View, SafeAreaView} from 'react-native'
import {Feather} from '@expo/vector-icons'

export default function CurrentWeather() {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message
  } = styles

  return (
    <SafeAreaView style={{...wrapper}}>
      <View style={{...container}}>
        <Feather name="sun" size={100} color="black" />
        <Text style={{...temp}}> 6 </Text>
        <Text style={{...feels}}> Feels like 5 </Text>
        <View style={{...highLowWrapper}}>
          <Text style={{...highLow}}> High: 8 </Text>
          <Text style={{...highLow}}> Low: 6 </Text>
        </View>
      </View>
      <View style={{...bodyWrapper}}>
        <Text style={{...description}}>It&apos;s Sunny!</Text>
        <Text style={{...message}}>It&apos;s perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
