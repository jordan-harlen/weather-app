import React, { useState, useEffect } from 'react'

import { getWeather, weatherByName } from '../API/WeatherApi'

import TopButtons from './TopButtons'
import Inputs from './Inputs'
import TimeAndLocation from './TimeAndLocation'
import TemperatureAndDetails from './TemperatureAndDetails'
import Forecast from './Forecast'

function App() {
  const [weatherData, setWeatherData] = useState([])
  const [searchName, setSearchName] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await getWeather()
      setWeatherData(data)
    }
    fetchData()
  }, [])

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await weatherByName('tokyo')
  //     setSearchName(data)
  //     setWeatherData([])
  //   }
  //   fetchData()
  // }, [])

  // useEffect(() => {
  //   console.log(searchName)
  //   console.log('weather data' + weatherData)
  // }, [searchName])

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation weatherData={weatherData} />
      <TemperatureAndDetails weatherData={weatherData} />
      <Forecast title="hourly forcast" />
      <Forecast title="daily forcast" />
    </div>
  )
}

export default App
