import React from 'react'

function Forecast({ title }) {
  return (
    <>
      <div className="flex flex-col items-center justify-start my-6">
        <p className="text-white font-medium uppercase">{title}</p>
        <hr className="my-2"></hr>
        <div className="flex flex-col items-center justify-between text-white">
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">2:00 PM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt=""
              className="w-8 my-1"
            />
            <p>19°</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">3:00 PM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt=""
              className="w-8 my-1"
            />
            <p>19°</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">4:00 PM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt=""
              className="w-8 my-1"
            />
            <p>19°</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">5:00 PM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt=""
              className="w-8 my-1"
            />
            <p>19°</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">6:00 PM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt=""
              className="w-8 my-1"
            />
            <p className="font-medium">19°</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forecast
