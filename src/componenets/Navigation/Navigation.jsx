import { NavLink } from 'react-router-dom';
import routes from '../routes';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div>
      <NavLink
        to={routes.home}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Random dish
      </NavLink>
      <NavLink
        to={routes.favourites}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Favourites
      </NavLink>
    </div>
  );
};

export default Navigation;
