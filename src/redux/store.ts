import { Action, configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkAction } from "redux-thunk";
import userReducer from "./user.slice";

const store = configureStore({
  reducer: userReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, UsersState, unknown, Action<string>>;

export default store;
