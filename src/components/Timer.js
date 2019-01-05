import React from "react"
import { connect } from "react-redux"
import * as actions from "../store/game/actions"

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 9,
    }
  }

  componentDidMount() {
    setInterval(() => {
      const {
        lifes,
        time,
        onDecrementTime,
        onResetTime,
        onCutLife,
      } = this.props

      if (lifes !== 0) {
        if (time > 1) {
          onDecrementTime()
        } else {
          onCutLife()
          onResetTime()
        }
      }
    }, 1000)
  }

  render = () => <p>{this.props.time}</p>
}

const mapStateToProps = state => ({
  time: state.time,
  lifes: state.lifes,
})

const mapDispatchToProps = dispatch => ({
  onResetTime: () => {
    dispatch(actions.resetTime)
  },
  onDecrementTime: () => {
    dispatch(actions.decrementTime)
  },
  onCutLife: () => {
    dispatch(actions.cutLife)
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)
