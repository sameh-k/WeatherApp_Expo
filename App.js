import React from 'react'
import CurrentWeather from '@screens/CurrentWeather'
import UpcomingWeather from '@screens/UpcomingWeather'
import City from '@screens/City'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey'
        }}>
        <Tab.Screen
          name={'CurrentWeather'}
          component={CurrentWeather}
          options={{
            tabBarIcon: ({focused}) => (
              <Feather
                name={'droplet'}
                size={25}
                color={focused ? 'tomato' : 'black'}
              />
            )
          }}
        />
        <Tab.Screen
          name={'UpcomingWeather'}
          component={UpcomingWeather}
          options={{
            tabBarIcon: ({focused}) => (
              <Feather
                name={'clock'}
                size={25}
                color={focused ? 'tomato' : 'black'}
              />
            )
          }}
        />
        <Tab.Screen
          name={'City'}
          component={City}
          options={{
            tabBarIcon: ({focused}) => (
              <Feather
                name={'home'}
                size={25}
                color={focused ? 'tomato' : 'black'}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
