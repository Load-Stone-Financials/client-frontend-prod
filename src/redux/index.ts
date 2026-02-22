import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
  type Middleware,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
// import thunk from 'redux-thunk';

// persistence init
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [],
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares: Middleware[] = [];
if (import.meta.env.VITE_ENV === 'development') {
  middleWares.push(logger);
}

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers,
);

export const persistor = persistStore(store);
