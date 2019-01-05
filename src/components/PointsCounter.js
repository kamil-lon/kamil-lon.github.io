import React from "react"
import { connect } from "react-redux"

const PointsCounter = ({ points }) => <div>{points}</div>

const mapState = state => ({
  points: state.points,
})

export default connect(mapState)(PointsCounter)
