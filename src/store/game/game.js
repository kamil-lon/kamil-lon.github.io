const initialState = {
  lifes: 3,
  time: 9,
}

export const resetTime = state => ({
  ...state,
  time: 9,
})

export const decrementTime = state => ({
  ...state,
  time: state.time - 1,
})

export const cutLife = state => ({
  ...state,
  lifes: state.lifes - 1,
})

const game = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_TIME":
      return resetTime(state)
    case "DECREMENT_TIME":
      return decrementTime(state)
    case "CUT_LIFE":
      return cutLife(state)
    default:
      return state
  }
}

export default game
