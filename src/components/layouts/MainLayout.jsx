import Nav from "../ui/Nav/Nav";
import Footer from "../ui/Footer/Footer";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.widget_container}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
