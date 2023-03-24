import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { getByNameThunk } from '../actions/weatherActions'

function Inputs() {
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

  return (
    <div className="flex flex-row justify-center my-6">
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
        className="flex flex-row w-3/4 items-center justify-center space-x-4"
      >
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            handleSearch(e)
          }}
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"
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
      <div className="flex flex-row w-1/4 items-center justify-center">
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
