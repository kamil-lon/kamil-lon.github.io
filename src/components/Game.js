import React from "react"
import PointsCounter from "./PointsCounter"
import LifesCounter from "./LifesCounter"

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      points: 0,
      lifes: 3,
    }
  }
  render() {
    const { question, firstAnswer, secondAnswer } = this.props
    return (
      <div>
        <PointsCounter points={this.state.points} />
        <LifesCounter lifes={this.state.lifes} />
        {this.state.lifes ? (
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
          "OD NOWA"
        )}
      </div>
    )
  }

  handleClick = answer =>
    answer === this.props.correctAnswer
      ? this.setState({ points: this.state.points + 1 })
      : this.setState({ lifes: this.state.lifes - 1 })
}

export default Game
