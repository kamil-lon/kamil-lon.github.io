import React from "react"
import PointsCounter from "./PointsCounter"
import LifesCounter from "./LifesCounter"
import Timer from "./Timer"
import { connect } from "react-redux"
import * as actions from "../store/game/actions"

class Game extends React.Component {
  render() {
    const {
      question,
      firstAnswer,
      secondAnswer,
      lifes,
      onResetGame,
    } = this.props
    return (
      <div>
        <PointsCounter />
        <LifesCounter />
        <Timer />
        {lifes ? (
          <>
            <h2>{question}</h2>
            <div>
              <button onClick={() => this.handleClick(firstAnswer)}>
                {firstAnswer}
              </button>
              <button onClick={() => this.handleClick(secondAnswer)}>
                {secondAnswer}
              </button>
            </div>
          </>
        ) : (
          <button onClick={onResetGame}>"OD NOWA"</button>
        )}
      </div>
    )
  }

  handleClick = answer => {
    const {
      correctAnswer,
      onAddPoint,
      onCutLife,
      getNewQuestion,
      onResetTime,
    } = this.props
    answer === correctAnswer ? onAddPoint() : onCutLife()
    getNewQuestion()
    onResetTime()
  }
}

const mapStateToProps = state => ({
  lifes: state.lifes,
  points: state.points,
})

const mapDispatchToProps = dispatch => ({
  onResetTime: () => {
    dispatch(actions.resetTime)
  },
  onCutLife: () => {
    dispatch(actions.cutLife)
  },
  onAddPoint: () => {
    dispatch(actions.addPoint)
  },
  onResetGame: () => {
    dispatch(actions.resetGame)
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
