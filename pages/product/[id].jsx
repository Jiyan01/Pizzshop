import styles from '../../styles/Product.module.css';
import Image from 'next/image'
import { useState } from "react"

function Product () {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" layout='fill'/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>€{pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choisi la taille</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src='/img/size.png' layout='fill' alt='' />
            <span className={styles.number}>Petit</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src='/img/size.png' layout='fill' alt='' />
            <span className={styles.number} >Moyen</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src='/img/size.png' layout='fill' alt='' />
            <span className={styles.number} >Grand</span>
          </div>
        </div>
        <h3 className={styles.choose}>Ingredients supplementaires</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input type="checkbox" id='double' name="double" className={styles.checkbox}/>
            <label htmlFor="double">Double Ingredient</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id='cheese' name="cheese" className={styles.checkbox}/>
            <label htmlFor="cheese">Extra Fromage</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id='spicy' name="spicy" className={styles.checkbox}/>
            <label htmlFor="spicy">Sauce piquante</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id='garlic' name="garlic" className={styles.checkbox}/>
            <label htmlFor="garlic">Sauce ail</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>
          </div>
      </div>
    </div>
  )
}

export default Product