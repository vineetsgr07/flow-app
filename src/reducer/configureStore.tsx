import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './index';

const persistConfig = {
  key: 'flow',
  storage: storage,
  whitelist: ['node', 'workflow'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);

export { persistor, store };