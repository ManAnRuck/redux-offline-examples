import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import App from './App';

import TodoReducer from "./reducers/todo"

import './index.css';


let store = createStore(
  combineReducers({
    todos: TodoReducer,
  }),
  {todos: [
    {id: 1, text: "todo 2"}
  ]}
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
