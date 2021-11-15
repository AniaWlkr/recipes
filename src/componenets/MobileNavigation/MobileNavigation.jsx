import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import styles from './MobileNavigation.module.css';

const MobileNavigation = ({ toggleAddModal, toggleMenuModal }) => {
  const handleAddBtnSubmit = event => {
    toggleMenuModal();
    toggleAddModal();
  };

  return (
    <ul className={styles.menuList}>
      <li className={styles.menuItem}>
        {' '}
        <NavLink
          to={routes.home}
          onClick={toggleMenuModal}
          className={isActive => (isActive ? styles.link : styles.activeLink)}
        >
          Random dish
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to={routes.favourites}
          onClick={toggleMenuModal}
          className={isActive => (isActive ? styles.link : styles.activeLink)}
        >
          Favourites
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <button
          type="button"
          onClick={handleAddBtnSubmit}
          className={styles.menuButton}
        >
          Add custom dish
        </button>
      </li>
    </ul>
  );
};

MobileNavigation.propTypes = {
  toggleAddModal: PropTypes.func,
  toggleMenuModal: PropTypes.func,
};

export default MobileNavigation;
