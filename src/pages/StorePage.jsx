import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ProductCounter from "../components/widgets/ProductCounter";
import styles from "./StorePage.module.css";
import PrimaryButton from "../components/widgets/PrimaryButton/PrimaryButton";
import itemsData from "../items";
import Header from "../components/ui/Header/Header";

const summaryItems = [
  // {
  //   concept: ' Total items ',
  //   total: ` ${itemsCount} `,
  // },
  {
    concept: " Total M2 ",
    total: ` totalM2`,
  },
  {
    concept: "Subtotal",
    total: ` $ subtotal `,
  },
  {
    concept: "Tax",
    total: `$ tax `,
  },
  {
    concept: "Total",
    total: `$ totalPrice} `,
  },
  {
    concept: "Due today 50%",
    total: `$ totalPrice / 2 `,
  },
];

const StorePage = () => {
  const [itemsCount, setItemsCount] = useState(0);

  return (
    <MainLayout>
      <header className={styles.header_container}>
        <h3>What items to store?</h3>
        <p>
          Select which items you wish to store before moving to <br /> your new
          home. We&apos;ll keep &apos;em safe!
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
      <div className={styles.utils}>
        <PrimaryButton text={"Clear"} variant="bordered" />
        <PrimaryButton text={"Calculate"} variant="primary" />
      </div>

      <section className={styles.summary}>
        <h5>Summary</h5>
        <div className={styles.summary_display}>
          <div className={styles.summary_item}>
            <span>Total Items</span>
            <span>{itemsCount}</span>
          </div>
          {summaryItems.map((i, index) => {
            return (
              <div key={index} className={styles.summary_item}>
                <span>{i.concept}</span>
                <span>{}</span>
              </div>
            );
          })}
        </div>
      </section>
    </MainLayout>
  );
};

export default StorePage;
