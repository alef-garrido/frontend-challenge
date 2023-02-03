import React from 'react';
import styles from './DeskMenu.module.css'

const DeskMenu = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>how we work</li>
        <li>services</li>
        <li>free quote</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default DeskMenu;