import MainLayout from "../components/layouts/MainLayout";
import styles from "./StorePage.module.css";

const StorePage = () => {
  return (
    <MainLayout>
      <header className={styles.header}>
          <h3>
            What items to store?
          </h3>
          <p>
          Select which items you wish to store before moving to <br /> your new home. We&apos;ll keep &apos;em safe!
          </p>
        </header>
      <div className={styles.container}>
      </div>
    </MainLayout>
  );
};

export default StorePage;