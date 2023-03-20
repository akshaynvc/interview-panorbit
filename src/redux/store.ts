import { Action, configureStore ,combineReducers} from "@reduxjs/toolkit";
import thunk, { ThunkAction } from "redux-thunk";
import userReducer from "./user.slice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducers =  combineReducers({
  userReducer:userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, UsersState, unknown, Action<string>>;

export const persistor = persistStore(store);
