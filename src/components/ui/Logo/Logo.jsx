import logoImg from "../../../assets/cil_house.png"
import styles from "./Logo.module.css"
const Logo = () => {
  return (
    <div className={styles.container}>
      <img 
        src={logoImg}
      />
    </div>
  );
};

export default Logo;