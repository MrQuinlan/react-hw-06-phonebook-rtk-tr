import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from '../slices/contactsSlice';
import filterReducer from '../slices/filterSlice';

const rootReducer = combineReducers({ contactsReducer, filterReducer });

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filterReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  contacts: [],
  filter: '',

  reducer: {
    persistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export { persistor, store };
