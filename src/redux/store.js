import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './favourites/favouritesReducer';

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
