import styles from './CounterButton.module.css'

const CounterButton = ({src, clickEvent}) => {


  return (
    <button 
    className={styles.custom_button}
    onClick={clickEvent}>
      <span>
        <img src={src} alt="" />
      </span>
    </button>
  )


 
};

export default CounterButton;
