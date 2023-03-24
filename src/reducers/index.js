import { combineReducers } from 'redux'

import weatherReducer from './weatherReducer'
import truthyReducer from './truthyReducer'

// import stuff from './stuff'

export default combineReducers({
  weather: weatherReducer,
  trueOrFalse: truthyReducer,
})
