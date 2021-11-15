import {
  getFavouritesRequest,
  addFavouritesRequest,
} from './favouritesActions';

const getFavouritesOperation = () => dispatch => {
  try {
    const data = JSON.parse(localStorage.getItem('favourites'));

    dispatch(getFavouritesRequest(data));
  } catch (error) {
    console.log(error);
  }
};

const addFavouritesOperation = recipe => dispatch => {
  dispatch(addFavouritesRequest(recipe));
};

export default { getFavouritesOperation, addFavouritesOperation };
