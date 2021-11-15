import { Component } from 'react';
import apiService from '../../utils/apiService';
import Loader from '../../componenets/Loader';
import Button from '../../componenets/Button';
import RecipeCard from '../../componenets/RecipeCard/RecipeCard';
import { addFavouriteToLS } from '../../utils/addFavouriteToLS';
import styles from './HomePage.module.scss';

class HomePage extends Component {
  state = {
    recipe: {},
    isLoading: false,
  };

  componentDidMount() {
    this.fetchRecipe();
  }

  fetchRecipe() {
    this.setState({ isLoading: true });
    apiService.getRecipe().then(([data]) => this.setState({ recipe: data }));
    this.setState({ isLoading: false });
  }

  onSkipBtnClick = event => {
    event.preventDefault();

    this.fetchRecipe();
  };

  onLikeBtnClick = event => {
    event.preventDefault();

    const { recipe } = this.state;
    addFavouriteToLS(recipe);

    this.fetchRecipe();
  };

  render() {
    const { recipe, isLoading } = this.state;
    return (
      <div className={styles.page}>
        {isLoading && <Loader />}
        <RecipeCard recipe={recipe} />
        <div className={styles.buttons}>
          <Button
            type="submit"
            title="Skip"
            className={styles.button}
            cbOnClick={this.onSkipBtnClick}
          />
          <Button
            type="submit"
            title="Like"
            className={styles.button}
            cbOnClick={this.onLikeBtnClick}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
