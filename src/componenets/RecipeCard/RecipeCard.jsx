import PropTypes from 'prop-types';
import getIngredients from './getIngredients';
import styles from './RecipeCard.module.scss';
import placeholder from '../images/placeholder.png';

const RecipeCard = ({ recipe }) => {
  const { strMeal, strCategory, strInstructions, strMealThumb } = recipe;
  const ingredients = getIngredients(recipe);

  return (
    <article className={styles.card}>
      {strMealThumb ? (
        <img src={strMealThumb} alt={strMeal} className={styles.img} />
      ) : (
        <img src={placeholder} alt={strMeal} className={styles.img} />
      )}

      <h2 className={styles.mealTitle}>
        {strCategory || 'Custom dish'} - {strMeal}
      </h2>

      {ingredients && (
        <table className={styles.table}>
          <thead>
            <tr colSpan="2">
              <th colSpan="2" className={styles.title}>
                Ingredients:
              </th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map(item => (
              <tr key={item.id}>
                <td className={styles.ingredient}>{item.ingredient} </td>
                <td className={styles.measure}>{item.measure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3 className={styles.title}>Directions</h3>
      <p className={styles.instructions}>{strInstructions}</p>
    </article>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object,
};

export default RecipeCard;
