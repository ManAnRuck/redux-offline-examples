import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import App from './App';

import TodoReducer from "./reducers/todo"

import './index.css';


let store = createStore(
  combineReducers({
    todos: TodoReducer,
  }),
  {todos: [
    {id: 1, text: "todo 2"}
  ]},
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
