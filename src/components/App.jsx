import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getWeather, weatherByName } from '../API/weatherApi'
import { getWeatherThunk, trueOrFalse } from '../actions/weatherActions'

import TopButtons from './TopButtons'
import Inputs from './Inputs'
import TimeAndLocation from './TimeAndLocation'
import TemperatureAndDetails from './TemperatureAndDetails'
import Forecast from './Forecast'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWeatherThunk())
  })

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
    </div>
  )
}

export default App
