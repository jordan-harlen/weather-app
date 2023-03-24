import { getWeather, weatherByName } from '../API/weatherApi'

//Actions vars
export const SAVE_WEATHER = 'SAVE_WEATHER'
export const TRUE_FALSE = 'TRUE_FALSE'

//Actions creators
export function saveWeather(data) {
  return {
    type: SAVE_WEATHER,
    payload: data,
  }
}

export function trueOrFalse(boolean) {
  return {
    type: TRUE_FALSE,
    payload: boolean,
  }
}

//Thunks
export function getWeatherThunk() {
  return (dispatch) => {
    getWeather()
      .then((res) => {
        dispatch(saveWeather(res))
      })
      .catch((err) => {
        console.log('err in getWeatherThunk ' + err.message)
      })
  }
}

export function getByNameThunk(name) {
  return (dispatch) => {
    weatherByName(name)
      .then((res) => {
        dispatch(saveWeather(res))
      })
      .catch((err) => {
        console.log('err in getWeatherThunk ' + err.message)
      })
  }
}
