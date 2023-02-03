import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ProductCounter from "../components/widgets/ProductCounter";
import styles from "./StorePage.module.css";
import itemsData from "../items";
import Header from "../components/ui/Header/Header";

const StorePage = () => {
  const [itemsCount, setItemsCount] = useState(0);

  return (
    <MainLayout>
      <header className={styles.header_container}>
      <h3>
            What items to store?
          </h3>
          <p>
          Select which items you wish to store before moving to <br /> your new home. We&apos;ll keep &apos;em safe!
          </p>
      </header>
      <div className={styles.gridContainer}>
        
        {itemsData.map(({ title, icon }, index) => {
          return (
            <ProductCounter
              key={index}
              value={0}
              title={`${title}`}
              src={`${icon}`}
            />
          );
        })}
      </div>
    </MainLayout>
  );
};

export default StorePage;
