import React from 'react'
import { useSelector } from 'react-redux'

function TimeAndLocation() {
  const weatherData = useSelector((redux) => redux.weather)

  const date = new Date(weatherData?.dt * 1000)
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }
  const dateString = date.toLocaleString('en-US', options)

  console.log(dateString)

  return (
    <>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">{dateString}</p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {weatherData?.name + ', ' + weatherData?.sys?.country}
        </p>
      </div>
    </>
  )
}

export default TimeAndLocation
