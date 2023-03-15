import React from 'react'

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: 'London',
    },
    {
      id: 2,
      title: 'Sydney',
    },
    {
      id: 3,
      title: 'Tokyo',
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

  return (
    <div className="flex items-center justify-center my-6 justify-around">
      {cities.map((city) => {
        return (
          <button className="text-white text-lg font-medium">
            {city.title}
          </button>
        )
      })}
    </div>
  )
}

export default TopButtons
