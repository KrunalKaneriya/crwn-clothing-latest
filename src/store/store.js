// import {compose,applyMiddleware,createStore} from "redux";
// import logger from "redux-logger";
// import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";    
// import { rootReducer } from "./root-reducer";

// const middlewares = [logger];
// const enchancedComposers = compose(applyMiddleware(...middlewares));

// export const store = configureStore({reducer:rootReducer,enhancers:enchancedComposers});
import {compose,createStore,applyMiddleware} from "redux";
import logger from "redux-logger";

import {rootReducer} from "./root-reducer";
const middlewares = [logger];
const composedEnchancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer,undefined,composedEnchancers);