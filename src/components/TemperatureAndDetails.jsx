import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons'

function TemperatureAndDetails() {
  const weatherData = useSelector((redux) => redux.weather)
  const truthy = useSelector((redux) => redux.trueOrFalse)

  const sunrise = new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString(
    [],
    {
      hour: '2-digit',
      minute: '2-digit',
    }
  )

  const sunset = new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString(
    [],
    {
      hour: '2-digit',
      minute: '2-digit',
    }
  )

  const speedInMiles = weatherData?.wind?.speed * 0.277778

  return (
    <>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{weatherData?.weather?.[0]?.main}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}.png`}
          alt=""
          className="w-20"
        />
        <p className="text-5xl">
          {truthy
            ? Math.ceil(weatherData?.main?.temp) + '°'
            : (Math.ceil(weatherData?.main?.temp) * 9) / 5 + 32 + '°'}
        </p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">
              {truthy
                ? Math.ceil(weatherData?.main?.feels_like) + '°'
                : (Math.ceil(weatherData?.main?.feels_like) * 9) / 5 + 32 + '°'}
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">
              {weatherData?.main?.humidity + '%'}
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">
              {truthy
                ? weatherData?.wind?.speed + ' km/h'
                : speedInMiles.toFixed(2) + ' m/s'}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise:<span className="font-medium ml-1">{sunrise}</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Sunset:<span className="font-medium ml-1">{sunset}</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High:
          <span className="font-medium ml-1">
            {truthy
              ? weatherData?.main?.temp_max + '°'
              : Math.ceil((weatherData?.main?.temp_max * 9) / 5 + 32) + '°'}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low:
          <span className="font-medium ml-1">
            {truthy
              ? weatherData?.main?.temp_min + '°'
              : Math.ceil((weatherData?.main?.temp_min * 9) / 5 + 32) + '°'}
          </span>
        </p>
      </div>
    </>
  )
}

export default TemperatureAndDetails
