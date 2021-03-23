import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import playersReducer from './players/players-reducer';
import playCellsReducer from './playCells/playCells-reducer';
import { PLAYER_TYPE } from './players/players-types';
import { CELLS_TYPE } from './playCells/playCells-types';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, PLAYER_TYPE, CELLS_TYPE],
    },
  }),
];

const PersistConfigPlayers = {
  key: 'players',
  storage
};
const PersistConfigCells = {
  key: 'cells',
  storage
};

export const store = configureStore({
  reducer: {
    players: persistReducer(PersistConfigPlayers, playersReducer),
    playCells: persistReducer(PersistConfigCells, playCellsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);