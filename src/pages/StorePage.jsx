import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ProductCounter from "../components/widgets/ProductCounter";
import styles from "./StorePage.module.css";
import PrimaryButton from "../components/widgets/PrimaryButton/PrimaryButton";
import itemsData from "../items";
import Header from "../components/ui/Header/Header";

const StorePage = () => {
  const [itemsCount, setItemsCount] = useState(0);
  const [totalM2, setTotalM2] = useState(0);
  const [display, toggleDisplay] = useState(false)


  const subtotal = totalM2 * 200
  const tax = subtotal * 0.16
  const totalPrice = subtotal + tax

  const summaryItems = [
    // {
    //   concept: ' Total items ',
    //   total: ` ${itemsCount} `,
    // },
    {
      concept: ' Total M2 ',
      total: ` ${totalM2.toFixed(2)} `,
    },
    {
      concept: 'Subtotal',
      total: ` $ ${subtotal.toFixed(2)} `,
    },
    {
      concept: 'Tax',
      total: `$ ${ tax.toFixed(2) } `,
    },
    {
      concept: 'Total',
      total: `$ ${ totalPrice.toFixed(2) } `,
    },
    {
      concept: 'Due today 50%',
      total: `$ ${ (totalPrice / 2 ).toFixed(2)} `,
    },
    
  ]
  
  const onResetClick = () => {
    setItemsCount(0)
    setTotalM2(0)
  }

  return (
      <MainLayout>
        <Header />
        <div className={ styles.gridContainer }  >
    {
       itemsData.map(({ title, icon, m2 }, index) => {
        return (
          <ProductCounter
            key={index}
            value={0}
            title={`${title}`}
            src={`${icon}`}
            m2={ +m2 }
            setTotalItems={setItemsCount}
            setTotalM2={setTotalM2}
            globalCount={itemsCount}

          />
        );
      })
    }
    <div className={styles.utils}>
      <PrimaryButton
        text={'Clear'}
        variant='bordered'
        event={ onResetClick  }
      />
          <PrimaryButton
        text={'Calculate'}
        variant='primary'
        event={ ()  => { toggleDisplay( prev => !prev )}}
      />
    </div>
    <section className={styles.summary}>
        <h5>Summary</h5>
        <div className={styles.summary_display}>
        <div
                   
                     className={styles.summary_item}
                  >
                  <span>
                    Total Items
                  </span>
                  <span>
                    { itemsCount }
                  </span>
                  </div>
            {
              summaryItems.map((i, index) => {
                return (
                  <div
                     key={index}
                     className={styles.summary_item}
                  >
                  <span>
                    {i.concept}
                  </span>
                  <span>
                    { display === false ? 0 : i.total}
                  </span>
                  </div>
                )
              })
            }
        </div>
    </section>
  </div>
      </MainLayout>
  );

};

export default StorePage;
