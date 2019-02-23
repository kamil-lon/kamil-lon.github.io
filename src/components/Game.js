import React, { useState } from 'react';
import PointsCounter from './PointsCounter';
import LifesCounter from './LifesCounter';
import Timer from './Timer';
import { connect } from 'react-redux';
import * as actions from '../store/game/actions';
import './Game.css';

function Game({
  lifes,
  onResetGame,
  onCutLife,
  getNewQuestion,
  onAddQuestion,
  onAddPoint,
  question
}) {
  const [propose, setPropose] = useState({});

  function handleContentChange(e) {
    setPropose({ ...propose, content: e.target.value });
  }

  function handleAnsAChange(e) {
    setPropose({ ...propose, ansA: e.target.value, corr: e.target.value });
  }

  function handleAnsBChange(e) {
    setPropose({ ...propose, ansB: e.target.value });
  }

  function handleAdd() {
    onAddQuestion(propose);
    setPropose({});
  }

  function handleClick(answer) {
    answer === question.corr ? onAddPoint() : onCutLife();
    getNewQuestion();
  }

  return (
    <div>
      <PointsCounter />
      <LifesCounter />
      {lifes > 0 && <Timer />}
      {lifes > 0 ? (
        <>
          <h2>{question.content}</h2>
          <div>
            <button onClick={() => handleClick(question.ansA)}>
              {question.ansA}
            </button>
            <button onClick={() => handleClick(question.ansB)}>
              {question.ansB}
            </button>
          </div>
        </>
      ) : (
        <button onClick={onResetGame}>OD NOWA</button>
      )}
      <div className="addForm">
        Pytanie:{' '}
        <input value={propose.content} onChange={handleContentChange} />
        Prawidłowa odpowiedź:{' '}
        <input value={propose.ansA} onChange={handleAnsAChange} />
        Błędna odpowiedź:{' '}
        <input value={propose.ansB} onChange={handleAnsBChange} />
        <button onClick={handleAdd}>DODAJ</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  lifes: state.game.lifes,
  points: state.game.points
});

const mapDispatchToProps = dispatch => ({
  onCutLife: () => {
    dispatch(actions.cutLife);
  },
  onAddPoint: () => {
    dispatch(actions.addPoint);
  },
  onResetGame: () => {
    dispatch(actions.resetGame);
  },
  onAddQuestion: question => {
    dispatch(actions.addQuestion(question));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
