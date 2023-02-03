import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CounterButton from "./CounterButton/CounterButton";
import plus from "../../assets/icons/plus.png";
import minus from "../../assets/icons/minus.png";
import styles from './ProductCounter.module.css';

const ProductCounter = (props) => {
  
  const {  title, src, setTotalItems } = props;

  const [itemsCounter, setItemsCounter] = useState(0);
  
 
  
  const handleAdd = () => {
    setItemsCounter(itemsCounter + 1);
    setTotalItems((prev) => prev + 1)
    setTotalM2((prev) => prev + m2);
    };

  const handleSubstract = () => {
    setItemsCounter(itemsCounter - 1);
    setTotalItems((prev) => prev - 1)
    setTotalM2((prev) => prev - m2);
  };
 
  return (
    <div className={styles.counter_container}>
      <div className={styles.card_icon}>
        <div className={styles.icon_container}>
          <span>
            <img src={src} alt={"icon"} />
          </span>
          <p>{title}</p>
        </div>
      </div>

      <div className={styles.counter}>
        {/* MINUS */}
        {itemsCounter === 0 ? (
          <CounterButton src={minus} />
        ) : (
          <CounterButton src={minus} clickEvent={handleSubstract} />
        )}
        {/* Counter */}
        <span className={styles.display_count}>
          <p> 
            {
               itemsCounter
            } 
           </p>
          {/* PLUS   */}
        </span>
        <CounterButton src={plus} clickEvent={handleAdd} />

      </div>
    </div>
  );
};

ProductCounter.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default ProductCounter;