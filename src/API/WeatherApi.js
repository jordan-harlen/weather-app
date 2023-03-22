import request from 'superagent'

export function getWeather() {
  return request
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=wellington&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
    .then((res) => {
      console.log(res.body)
      return res.body
    })
    .catch((err) => {
      console.log('Err in WeatherApi' + err.message)
    })
}

export function weatherByName(name) {
  return request
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
    .then((res) => {
      console.log(res.body)
      return res.body
    })
    .catch((err) => {
      console.log('Err in WeatherApi' + err.message)
    })
}
