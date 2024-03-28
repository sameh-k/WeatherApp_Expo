import React from 'react'
import {StyleSheet, Text, View, SafeAreaView} from 'react-native'
import {Feather} from '@expo/vector-icons'
import RowText from '@components/RowText'

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
        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={"It's Sunny!"}
        messageTwo={"It's perfect t-shirt weather"}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff'
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
