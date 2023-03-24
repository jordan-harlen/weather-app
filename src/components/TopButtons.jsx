import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getByNameThunk } from '../actions/weatherActions'

function TopButtons() {
  const dispatch = useDispatch()

  const cities = [
    {
      id: 1,
      title: 'London',
    },
    {
      id: 2,
      title: 'Tokyo',
    },
    {
      id: 3,
      title: 'Christchurch',
    },
    {
      id: 4,
      title: 'Wellington',
    },
    {
      id: 5,
      title: 'Auckland',
    },
  ]

  function handleClick(e) {
    e.preventDefault()
    dispatch(getByNameThunk(e.target.id))
  }

  return (
    <div className="flex items-center justify-center my-6 justify-around">
      {cities.map((city) => {
        return (
          <button
            id={city.title}
            key={city.id}
            onClick={(e) => {
              handleClick(e)
            }}
            className="text-white text-lg font-medium hover:scale-110"
          >
            {city.title}
          </button>
        )
      })}
    </div>
  )
}

export default TopButtons
