const initialState = {
  lifes: 3,
  points: 0
};

export const cutLife = state => ({
  ...state,
  lifes: state.lifes - 1
});

export const addPoint = state => ({
  ...state,
  points: state.points + 1
});

export const resetGame = state => ({
  ...state,
  lifes: 3,
  points: 0
});

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'CUT_LIFE':
      return cutLife(state);
    case 'ADD_POINT':
      return addPoint(state);
    case 'RESET_GAME':
      return resetGame(state);
    default:
      return state;
  }
};

export default game;
