import { createReducer } from '@reduxjs/toolkit';
import {
  getFavouritesRequest,
  addFavouritesRequest,
} from './favouritesActions';

const favouritesReducer = createReducer([], {
  [getFavouritesRequest]: (_, { payload }) => payload,
  [addFavouritesRequest]: (state, { payload }) => [...state, payload],
});

export default favouritesReducer;
