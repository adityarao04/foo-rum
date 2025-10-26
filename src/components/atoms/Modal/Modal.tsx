import React, { useCallback, useEffect, useRef } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  modalTitle?: boolean;
  titleLarge?: boolean;
  modalTitleText?: string;
  onCloseButtonClick?: () => void;
  onBackdropClick?: () => void;
  closeOnOutsideClick?: boolean;
  customModalClass?: string;
  customModalWrapperClass?: string;
  customModalContentClass?: string;
  customClassTitle?: string;
  customButton?: boolean;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const modalParent = useRef<HTMLDivElement>(null);
  const {
    modalTitle,
    titleLarge,
    onCloseButtonClick,
    onBackdropClick,
    modalTitleText,
    customButton = false,
    closeOnOutsideClick = true,
    customModalClass,
    customModalWrapperClass,
    customModalContentClass,
    customClassTitle,
    children
  } = props;

  const close = useCallback((e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      onCloseButtonClick?.();
      onBackdropClick?.();
    }
  },[onBackdropClick, onCloseButtonClick]);

  useEffect(() => {
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [close]);

  const handleChildElementClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onCloseHandler = () => {
    onCloseButtonClick?.();
    onBackdropClick?.();
  };

  return (
    <div 
      className={`${styles.overlay} ${customModalClass || ''}`}
      onClick={closeOnOutsideClick ? onCloseHandler : undefined}
    >
      <div 
        className={`${styles.modalWrapper} ${customModalWrapperClass || ''}`}
        onClick={handleChildElementClick}
        ref={modalParent}
      >
        {customButton ? (
          <button 
            aria-label="Close Button" 
            className={styles.customBtnClose} 
            onClick={onCloseHandler}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ) : (
          <button 
            aria-label="Close Button" 
            className={styles.btnClose} 
            onClick={onCloseHandler}
          >
            ×
          </button>
        )}
        
        <div className={`${styles.modalContent} ${customModalContentClass || ''}`}>
          {modalTitle && (
            <h2 className={`${titleLarge ? styles.titleLarge : ''} ${customClassTitle || ''}`}>
              {modalTitleText}
            </h2>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
