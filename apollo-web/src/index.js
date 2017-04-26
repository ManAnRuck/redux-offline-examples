import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
import { ApolloProvider } from "react-apollo";
//import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'

import localIds from "./middlewares/redux-offline-localids"

import App from './App';

import apolloClient from "./apollo/client"

import TodoReducer from "./reducers/todo";
import OfflineReducer from "./reducers/offline";

import './index.css';



const store = createStore(
  combineReducers({
    todos: TodoReducer,
    apollo: apolloClient.reducer(),
  }),
  undefined,
  compose(
    applyMiddleware(promise, apolloClient.middleware(), logger),
    //devToolsEnhancer(), // https://github.com/jevakallio/redux-offline/issues/60
    offline({
      ...offlineConfig,
      retry: (action, retries) => action.meta.urgent ? 100 : 10000,
      effect: (effect, action) => {
        switch (effect.type) {
          case "query":
            return apolloClient.query({...effect}).then(({data}) => data);
          case "mutation":
            return apolloClient.mutate({...effect}).then(({data}) => data);
          default:
        }
      }
    }),
    localIds({reducer: OfflineReducer}),
  )

);

export { store };

ReactDOM.render(
  <ApolloProvider store={store} client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
