export const cutLife = {
  type: 'CUT_LIFE'
};

export const addPoint = {
  type: 'ADD_POINT'
};

export const resetGame = {
  type: 'RESET_GAME'
};

export const addQuestion = question => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //db
    const firestore = getFirestore();
    firestore
      .collection('questions')
      .add(question)
      .then(() => {
        dispatch({ type: 'ADD_QUESTION' });
      })
      .catch(err => dispatch({ type: 'ADD_QUESTION_ERR' }));
  };
};

export default { cutLife, addPoint, resetGame, addQuestion };
