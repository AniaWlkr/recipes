import { Component } from 'react';
import apiService from '../../utils/apiService';
import Button from '../../componenets/Button';
import RecipeCard from '../../componenets/RecipeCard/RecipeCard';
import { addFavouriteToLS } from '../../utils/addFavouriteToLS';
import styles from './HomePage.module.scss';

class HomePage extends Component {
  state = {
    recipe: {},
  };

  componentDidMount() {
    this.fetchRecipe();
  }

  fetchRecipe() {
    apiService.getRecipe().then(([data]) => this.setState({ recipe: data }));
  }

  onSkipBtnClick = event => {
    event.preventDefault();

    this.fetchRecipe();
  };

  onLikeBtnClick = event => {
    event.preventDefault();

    const { recipe } = this.state;
    addFavouriteToLS(recipe);
  };

  render() {
    const { recipe } = this.state;
    return (
      <div className={styles.page}>
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
