import { Product } from "@shared/products";

import styles from "./product.module.css"

const ProductScene = ({ product }: {product: Product}) => {
  return (
    <div className={styles.container}>
      <img
        alt={product.title}
        src={product.image}
        className={styles.productImage}
      />
      <div>
        <p className={styles.secondaryText}>{product.category}</p>
        <h1>{product.title}</h1>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.secondaryText}>{product.description}</p>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductScene;
