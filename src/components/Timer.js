import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/game/actions';

function Timer(props) {
  const [time, setTime] = useState(10);

  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = () => {
      setTime(time - 1);
    };
  }, [time]);

  useEffect(() => {
    setTime(10);
    let interval = setInterval(() => savedCallback.current(), 1000);
    return () => clearInterval(interval);
  }, [props.lifes, props.points]);

  useEffect(() => {
    if (time === 0) props.onCutLife();
  }, [time]);

  return <p>{time}</p>;
}

const mapStateToProps = state => ({
  points: state.game.points,
  lifes: state.game.lifes
});

const mapDispatchToProps = dispatch => ({
  onCutLife: () => {
    dispatch(actions.cutLife);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
