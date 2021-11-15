import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './Modal.module.scss';
import IconButton from '../IconButton';
import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  const handleEscape = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const closeOnBackdrop = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={closeOnBackdrop}>
      <div className={styles.content}>{children}</div>
      <IconButton
        className={styles.button}
        onClick={onClose}
        aria-label="close button"
      >
        <CloseIcon className={styles.icon} />
      </IconButton>
    </div>,
    modalRoot,
  );
};

export default Modal;
