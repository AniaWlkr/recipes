export const addFavouriteToLS = newRecipe => {
  try {
    const favourites = JSON.parse(localStorage.getItem('favourites'));

    if (!favourites) {
      localStorage.setItem('favourites', JSON.stringify([newRecipe]));
    } else if (favourites.find(item => item.idMeal === newRecipe.idMeal)) {
      alert('This meal already in the favourites list');
    } else {
      favourites.push(newRecipe);
      localStorage.setItem('favourites', JSON.stringify(favourites));
    }
  } catch (error) {
    console.log(error);
  }
};
