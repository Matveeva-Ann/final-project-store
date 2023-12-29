import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { authUserReducer } from './auth/auth-user-slice';
import { persistReducer } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authUser'],
}

export const rootReducer = combineReducers({
  authUser: authUserReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer)