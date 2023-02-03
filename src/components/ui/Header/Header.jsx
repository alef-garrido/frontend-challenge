import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
    <h3>What items to store?</h3>
    <p>
      Select which items you wish to store before moving to <br /> your new
      home. We&apos;ll keep &apos;em safe!
    </p>
  </header>
  );
};

export default Header;