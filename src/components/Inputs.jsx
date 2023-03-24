import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { getByNameThunk } from '../actions/weatherActions'
import { trueOrFalse } from '../actions/weatherActions'

function Inputs() {
  const truthy = useSelector((redux) => redux.trueOrFalse)
  const dispatch = useDispatch()

  const [searchInput, setSearchInput] = useState('')

  function handleSearch(e) {
    e.preventDefault()
    setSearchInput(e.target.value)
    console.log(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getByNameThunk(searchInput))
    setSearchInput('')
  }

  function CelsiusButton() {
    dispatch(trueOrFalse(true))
    console.log(truthy)
  }

  function FahrenheitButton() {
    dispatch(trueOrFalse(false))
    console.log(truthy)
  }

  return (
    <div className="flex flex-col md:flex-row justify-center my-6">
      <form className="flex flex-row w-full md:w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search a city..."
          className="text-xl font-light p-2 w-full md:w-4/5 shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <button>
          <UilSearch
            size={25}
            className="text-white cursor-pointer hover:scale-125"
          />
        </button>
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer hover:scale-125"
        />
      </form>
      <div className="flex flex-row w-full md:w-1/4 items-center justify-center">
        <button name="celcius" className="text-xl text-white font-light">
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button name="fahrenheit" className="text-xl text-white font-light">
          °F
        </button>
      </div>
    </div>
  )
}

export default Inputs
