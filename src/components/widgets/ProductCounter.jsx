import { useState } from "react";
import PropTypes from "prop-types";
import CounterButton from "./CounterButton/CounterButton";
import plus from "../../assets/icons/plus.png";
import minus from "../../assets/icons/minus.png";
import styles from './ProductCounter.module.css';

const ProductCounter = (props) => {
  
  const {  title, src, } = props;

  const [itemsCounter, setItemsCounter] = useState(0);
  

  const handleAdd = () => {
    setItemsCounter(itemsCounter + 1);
    };

  const handleSubstract = () => {
    setItemsCounter(itemsCounter - 1);
  };
 
  return (
    <div>
      {/* ICON DISPLAY */}
      <div >
        <div className={styles.icon_container}>
          <span>
            <img src={src} alt={"icon"} />
          </span>
          <p>{title}</p>
        </div>
      </div>
      {/* COUNTER */}
      <div>
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
  m2: PropTypes.number.isRequired,
  setTotalItems: PropTypes.func.isRequired,
  setTotalM2: PropTypes.func.isRequired,  
  globalCount: PropTypes.number.isRequired,  
};

export default ProductCounter;


