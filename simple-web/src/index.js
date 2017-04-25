import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
//import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'

import localIds from "./middlewares/redux-offline-localids"

import App from './App';

import TodoReducer from "./reducers/todo"

import './index.css';

const localIdsReducer = (state, action) => {
    switch (action.type) {
      case "TODO_CREATE_COMMIT":
        let newState = {...state};
        newState.offline.outbox = newState.offline.outbox.map(entry => {
          switch (entry.type) {
            case "TODO_CHANGE_COMPLETE":
              entry.meta.offline.effect.url = entry.meta.offline.effect.url.replace(action.meta.localId, action.payload.id)
              entry.payload.id = action.payload.id;
              return {...entry};
              break;
            default:
              return entry;
          }
        })
        return state;

      default:
        return state;

    }
};

const store = createStore(
  combineReducers({
    todos: TodoReducer,
  }),
  undefined,
  compose(
    applyMiddleware(promise, logger),
    //devToolsEnhancer(), // https://github.com/jevakallio/redux-offline/issues/60
    offline({
      ...offlineConfig,
      retry: (action, retries) => action.meta.urgent ? 100 : 10000
    }),
    localIds({reducer: localIdsReducer}),
  )

);

export { store };

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
