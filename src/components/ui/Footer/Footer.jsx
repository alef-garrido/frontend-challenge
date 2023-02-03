import { Fragment } from "react";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import SocialProfilesBar from "../SocialProfiles/SocialProfiles";
import whappButton from "../../../assets/WhatsApp_logo.png"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.gridWrapper}>
        <div className={styles.firstColumn}>
          <Logo />

          <p>
            {" "}
            It is a long established fact that a reader will be distracted by
            the readable content of a page whenters.{" "}
          </p>

          <SocialProfilesBar />
        </div>
        <div className={styles.secondColumn}>
          <ul>
            <h6 className={styles.title}>About Us</h6>
            <li>About</li>
            <li>Privacy & Policy</li>
            <li>Terms & Conditions</li>
            <li>Terms & Conditions</li>
            <li>Faq</li>

          </ul>
        </div>
        <div className={styles.thirdColumn}>
          <ul>
            <h6 className={styles.title}>Navigate</h6>
            <li>How We Work</li>
            <li>Services</li>
            <li>Faq</li>
            <li>Contact</li>
            <li>Free Quote</li>
          </ul>
        </div>
        <div className={styles.forthColumn}>
          <ul>
            <h6
              className={styles.title}
            >Contact Us</h6>
            <li>Ricardo Margain 444</li>
            <li>Call: +52 81 1234 5678</li>
            <li>Email: info@challenge.com</li>
            <button>
              <img src={whappButton} alt="Whats app button" />
            </button>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
