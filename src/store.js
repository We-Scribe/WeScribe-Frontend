import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import reducer from "./reducers/auth"

// Redux dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export const persistor = persistStore(store);

export default store;