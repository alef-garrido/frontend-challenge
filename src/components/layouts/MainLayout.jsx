
import styles from "./MainLayout.module.css"

const MainLayout = ( { children } ) => {
  return (
    <div className={styles.container}>
      {/* <Nav /> */}
      <div>
        <main>
          { children }
        </main>
      </div>
    {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;