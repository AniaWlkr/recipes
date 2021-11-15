import { useState, useCallback } from 'react';
import Navigation from '../Navigation';
import { NavLink } from 'react-router-dom';
import Button from '../../componenets/Button';
import IconButton from '../IconButton';
import Modal from '../../componenets/Modal';
import AddCustomDish from '../../componenets/AddCustomDish/AddCustomDish';
import MobileNavigation from '../../componenets/MobileNavigation';
import routes from '../../componenets/routes';
import logo from '../../assets/images/recipe-book.png';
import { ReactComponent as BurgerMenu } from '../../assets/icons/hamburgerMenu.svg';
import styles from './AppBar.module.scss';

const AppBar = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const toggleAddModal = useCallback(() => {
    setShowAddModal(prevShowAddModal => !prevShowAddModal);
  }, []);

  const [showMenuModal, setShowMenuModal] = useState(false);
  const toggleMenuModal = useCallback(() => {
    setShowMenuModal(prevShowMenuModal => !prevShowMenuModal);
  }, []);

  showAddModal || showMenuModal
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'scroll');

  const onAddBtnClick = event => {
    toggleAddModal();
  };

  const onBurgerBtnClick = event => {
    toggleMenuModal();
  };

  return (
    <header className={styles.header}>
      <NavLink
        to={routes.home}
        className={isActive => (isActive ? styles.link : styles.activeLink)}
      >
        <div className={styles.logo}>
          <img src={logo} alt="Recipe-book logo" className={styles.logoImg} />
          <span className={styles.logoName}> Recipe-book </span>
        </div>
      </NavLink>

      <Navigation />
      <Button
        type="button"
        title="Add custom dish"
        cbOnClick={onAddBtnClick}
        className={styles.addDishButton}
      />
      <IconButton
        className={styles.burgerMenuIcon}
        onClick={onBurgerBtnClick}
        aria-label="burger-menu button"
      >
        <BurgerMenu className={styles.icon} />
      </IconButton>
      {showAddModal && (
        <Modal onClose={toggleAddModal}>
          <AddCustomDish toggleModal={toggleAddModal} />{' '}
        </Modal>
      )}
      {showMenuModal && (
        <Modal onClose={toggleMenuModal}>
          <MobileNavigation
            toggleMenuModal={toggleMenuModal}
            toggleAddModal={toggleAddModal}
          />{' '}
        </Modal>
      )}
    </header>
  );
};

export default AppBar;
