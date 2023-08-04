import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer} from './filterSlice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };
// export const persistedReducerContact = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducerContact,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
