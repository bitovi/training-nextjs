import styles from "./CartItem.module.css"

const CartItem = ({ product }: any) => {
  return (
    <div key={product.id} className={styles.productContainer}>
      <img src={product.image} className={styles.productImage} />
      <div>
        <p className={styles.label}>
          {product.title} (x{product.quantity})
        </p>
        <p className={styles.secondaryText}>{product.category}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default CartItem