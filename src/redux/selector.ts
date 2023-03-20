import { createSelector } from "@reduxjs/toolkit";

export const selector= createSelector(
  (state: any) => state.userReducer,
  (userReducer)=>userReducer
);



