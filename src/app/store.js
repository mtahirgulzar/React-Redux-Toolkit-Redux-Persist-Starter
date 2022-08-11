import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage,
}
const userReducer = persistReducer(persistConfig, userSlice)
export const store = configureStore({
  reducer: userReducer,
});

export const persistor = persistStore(store)