import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import favouritesReducer from './favourites/favouritesReducer';

const middleware = [...getDefaultMiddleware({})];

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
