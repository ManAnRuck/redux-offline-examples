import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
//import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'

import App from './App';

import TodoReducer from "./reducers/todo"

import './index.css';


let store = createStore(
  combineReducers({
    todos: TodoReducer,
  }),
  undefined,
  compose(
    applyMiddleware(promise, logger),
    //devToolsEnhancer(), // https://github.com/jevakallio/redux-offline/issues/60
    offline({
      ...offlineConfig,
      retry: (action, retries) => action.meta.urgent ? 100 : 5000
    })
  )

);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
