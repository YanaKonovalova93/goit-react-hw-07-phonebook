import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsSlice } from './contactsSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};
export const persistedReducerContact = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedReducerContact,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
