import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import playersReducer from './players/players-reducer';//FIXME:

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const PersistConfig = {
  key: 'players',//FIXME:
  storage,
};

export const store = configureStore({
  reducer: { contacts: persistReducer(PersistConfig, playersReducer) },//FIXME:
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);