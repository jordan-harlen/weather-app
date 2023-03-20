import React from 'react'

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: 'London',
    },
    {
      id: 2,
      title: 'Melbourne',
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
          <button
            key={city.id}
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
