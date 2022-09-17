import { compose, createStore, applyMiddleware } from 'redux';
import {persistReducer,persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger';
// import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

import { rootReducer } from './root-reducer';
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currentState: ', store.getState());

  next(action);

  console.log('next state: ', store.getState());
};

// const middleWares = [loggerMiddleware];

const persistConfig = {
    key:"root",
    storage,
    whitelist:['cart']
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

// const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const store = configureStore({reducer:persistedReducer,middleware:[sagaMiddleware,logger]});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store); 
