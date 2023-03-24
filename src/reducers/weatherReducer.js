import { SAVE_WEATHER } from '../actions/weatherActions'

function reducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SAVE_WEATHER:
      return payload
    default:
      return state
  }
}

export default reducer
