import { compose, createStore, applyMiddleware } from 'redux';
import {persistReducer,persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

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

const middleWares = [thunk,loggerMiddleware];

const persistConfig = {
    key:"root",
    storage,
    blacklist:['user']
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

const composedEnhancers = compose(applyMiddleware(thunk));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store); 
