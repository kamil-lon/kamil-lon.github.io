import React from "react"
import PointsCounter from "./PointsCounter"
import LifesCounter from "./LifesCounter"
import Timer from "./Timer"
import { connect } from "react-redux"
import * as actions from "../store/game/actions"

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      points: 0,
    }
  }
  render() {
    const { question, firstAnswer, secondAnswer } = this.props
    return (
      <div>
        <PointsCounter points={this.state.points} />
        <LifesCounter />
        <Timer />
        {this.props.lifes ? (
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
          <button onClick={this.startNewGame}>"OD NOWA"</button>
        )}
      </div>
    )
  }

  handleClick = answer => {
    answer === this.props.correctAnswer
      ? this.setState({ points: this.state.points + 1 })
      : this.setState({ lifes: this.state.lifes - 1 })
    this.props.getNewQuestion()
    this.props.onResetTime()
  }

  startNewGame = () => {
    this.setState({
      points: 0,
    })
  }

  cutLife = () => {
    this.setState({ lifes: this.state.lifes - 1 })
  }
}

const mapStateToProps = state => ({
  lifes: state.lifes,
})

const mapDispatchToProps = dispatch => ({
  onResetTime: () => {
    dispatch(actions.resetTime)
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
