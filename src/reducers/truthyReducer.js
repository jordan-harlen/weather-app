export const TRUE_FALSE = 'TRUE_FALSE'

function reducer(state = true, action) {
  const { type, payload } = action

  switch (type) {
    case TRUE_FALSE:
      return payload
    default:
      return state
  }
}

export default reducer
