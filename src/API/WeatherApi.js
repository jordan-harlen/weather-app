import request from 'superagent'

function getWeather() {
  return request
    .get(
      'https://api.openweathermap.org/data/2.5/weather?q=wellington&appid=88160a9a9a3cee19171441d7186ff35b&units=metric'
    )
    .then((res) => {
      console.log(res.body)
      return res.body
    })
    .catch((err) => {
      console.log('Err in WeatherApi' + err.message)
    })
}

export default getWeather
