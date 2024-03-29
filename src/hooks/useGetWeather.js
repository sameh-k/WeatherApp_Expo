import {useState, useEffect} from 'react'

import * as Location from 'expo-location'

import {WEATHER_API_KEY} from '@env'

export const useGetWeather = () => {
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

  return [loading, error, weather]
}
