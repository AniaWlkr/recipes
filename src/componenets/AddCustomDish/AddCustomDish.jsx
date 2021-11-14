import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button';
import { operations } from '../../redux/favourites';
import { addFavouriteToLS } from '../../utils/addFavouriteToLS';
import styles from './AddCustomDish.module.scss';

const AddCustomDish = ({ toggleModal }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;

      default:
        console.error('This field is not defined');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newCustomDish = {
      idMeal: uuidv4(),
      strMeal: title,
      strInstructions: description,
    };

    dispatch(operations.addFavouritesOperation(newCustomDish));
    addFavouriteToLS(newCustomDish);
    toggleModal();

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>Add custom dish</h3>
      <input
        type="text"
        placeholder="Dish title"
        name="title"
        required
        value={title}
        onChange={handleChange}
        className={styles.input}
      />
      <textarea
        placeholder="Dish description ..."
        name="description"
        required
        value={description}
        onChange={handleChange}
        className={styles.textarea}
      />
      <Button type="submit" title="Add custom dish" className={styles.button} />
    </form>
  );
};

AddCustomDish.propTypes = {
  toggleModal: PropTypes.func,
};

export default AddCustomDish;
