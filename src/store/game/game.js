const initialState = {
  lifes: 3,
  time: 9,
  points: 0,
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

export const addPoint = state => ({
  ...state,
  points: state.points + 1,
})

export const resetGame = state => ({
  ...state,
  lifes: 3,
  time: 9,
  points: 0,
})

const game = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_TIME":
      return resetTime(state)
    case "DECREMENT_TIME":
      return decrementTime(state)
    case "CUT_LIFE":
      return cutLife(state)
    case "ADD_POINT":
      return addPoint(state)
    case "RESET_GAME":
      return resetGame(state)
    default:
      return state
  }
}

export default game
