import { createSelector } from "@reduxjs/toolkit";

export const selector= createSelector(
  (state: UsersState) => state,
  (state)=>state
);



