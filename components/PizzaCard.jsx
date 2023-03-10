import Image from "next/image";
import styles from '../styles/PizzaCard.module.css'

function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="100" height="100"></Image>
      <h1 className={styles.title}>CHEVRE MIEL</h1>
      <span className={styles.price}>€19.90</span>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur</p>
    </div>
  );
};

export default PizzaCard