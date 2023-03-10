import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';


function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>La Meilleur pizza de la ville</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi ducimus ipsa reiciendis alias, aliquid eum est unde hic nisi recusandae tempore. Incidunt nostrum quod porro cumque dignissimos tenetur harum!</p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  )
}

export default PizzaList