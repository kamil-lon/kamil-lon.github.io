import React from 'react';
import './LifesCounter.css';
import { connect } from 'react-redux';

const LifesCounter = ({ lifes }) => (
  <div className="lifes">
    {lifes > 0 ? [...Array(lifes)].map((x, i) => <p key={i}>♥</p>) : 'KONIEC'}
  </div>
);

const mapStateToProps = state => ({
  lifes: state.game.lifes
});

export default connect(mapStateToProps)(LifesCounter);
