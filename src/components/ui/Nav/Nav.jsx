import Logo from '../Logo/Logo';
import MobileMenu from './MobileMenu/MobileMenu';
import DeskMenu from './DeskMenu/DeskMenu';
import styles from './Nav.module.css';


const Nav = () => {
  return (
  
      <nav 
        className={styles.container}
      >
        <div className={styles.wraper}>

          <Logo />
          <DeskMenu />
          <MobileMenu />

        </div>
       
      </nav>
  
  );
};

export default Nav;