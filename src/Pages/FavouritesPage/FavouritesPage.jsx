import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipeCard from '../../componenets/RecipeCard/RecipeCard';
import { selectors, operations } from '../../redux/favourites';
import styles from './FavouritesPage.module.scss';

const FavouritesPage = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectors.getFavourites);
  useEffect(() => dispatch(operations.getFavouritesOperation()), []);

  return (
    <div>
      {favourites ? (
        <ul className={styles.list}>
          {favourites.map(recipe => (
            <li key={recipe.idMeal} className={styles.listItem}>
              <RecipeCard recipe={recipe} />
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <span role="img" aria-label="sad face icon">
            😔
          </span>{' '}
          No recipes were added
        </p>
      )}
    </div>
  );
};

export default FavouritesPage;
