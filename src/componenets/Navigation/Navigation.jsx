import { NavLink } from 'react-router-dom';
import routes from '../routes';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div>
      <NavLink
        to={routes.home}
        className={isActive => (isActive ? styles.link : styles.activeLink)}
      >
        Random dish
      </NavLink>
      <NavLink
        to={routes.favourites}
        className={isActive => (isActive ? styles.link : styles.activeLink)}
      >
        Favourites
      </NavLink>
    </div>
  );
};

export default Navigation;
