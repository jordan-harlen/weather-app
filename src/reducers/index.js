import { combineReducers } from 'redux'

import weatherReducer from './weatherReducer'

// import stuff from './stuff'

export default combineReducers({
  weather: weatherReducer,
})
