import PropTypes from 'prop-types';
import styles from './IconButton.module.css';

const IconButton = ({ children, type, handleClick, ...allyProps }) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={handleClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.string,
};

IconButton.defaultProps = {
  handleClick: () => null,
  children: [],
  type: 'button',
};

export default IconButton;
