import React from 'react';
import styles from './PrimaryButton.module.css';

const PrimaryButton = ( { event, text, variant }) => {
  return (
    <button
      className={styles[`button_${ variant }`]}
      onClick={ event }
    >
      { text }
    </button>
  );
};

export default PrimaryButton;