import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DateTime } from 'luxon'

function TimeAndLocation() {
  const weatherData = useSelector((redux) => redux.weather)
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    async function getTime() {
      const timeZone = weatherData?.timezone || 0
      const date = new Date()
      const utc = date.getTime() + date.getTimezoneOffset() * 60000
      const local = new Date(utc + timeZone * 1000)
      const formattedLocalTime = DateTime.fromJSDate(local).toFormat(
        "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
      )
      setLocalTime(formattedLocalTime)
    }
    getTime()
  }, [weatherData?.dt, weatherData?.timezone])

  return (
    <>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">{localTime}</p>
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
