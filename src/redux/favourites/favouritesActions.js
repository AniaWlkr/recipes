import { createAction } from '@reduxjs/toolkit';
import types from './favouritesActionsTypes';

export const getFavouritesRequest = createAction(types.FAVOURITES_GET);
export const addFavouritesRequest = createAction(types.FAVOURITES_ADD);
