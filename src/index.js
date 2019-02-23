import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import game from './store/game/game';
import thunk from 'redux-thunk';
import {
  reduxFirestore,
  getFirestore,
  firestoreReducer
} from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';
import config from './config/firebaseConfig';

const rootReducer = combineReducers({
  game: game,
  firestore: firestoreReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(config),
    reactReduxFirebase(config)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
