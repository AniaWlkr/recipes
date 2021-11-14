import axios from 'axios';

const getRecipe = () => {
  return axios
    .get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.data.meals)
    .catch(err => err);
};

export default { getRecipe };
