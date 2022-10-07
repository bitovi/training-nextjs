import type { GetServerSideProps, NextPage } from "next";
import type { Cart } from "@shared/products";

import { getCartWithProducts } from "@shared/products";

import styles from "./cart.module.css";

interface CartPageProps {
  cart: Cart;
}

const CartPage: NextPage<CartPageProps> = ({ cart }) => {
  return (
    <div className={styles.container}>
      <div>
        {cart.products.map((product) => (
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
        ))}
      </div>
      <div className={styles.orderSummary}>
        <p className={styles.summaryTitle}>Order Summary</p>
        <div className={styles.summaryItem}>
          <p className={styles.label}>Subtotal</p>
          <p>${cart.orderSummary.subtotal}</p>
        </div>
        <div className={styles.summaryItem}>
          <p className={styles.label}>Shipping</p>
          <p>${cart.orderSummary.shipping}</p>
        </div>
        <div className={styles.summaryItem}>
          <p className={styles.label}>Tax</p>
          <p>${cart.orderSummary.tax}</p>
        </div>
        <hr />
        <div className={styles.summaryItem}>
          <p className={styles.label}>Total</p>
          <p>${cart.orderSummary.total}</p>
        </div>
        <button className={styles.button}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;

export const getServerSideProps: GetServerSideProps<
  CartPageProps,
  { id: string }
> = async ({ query }) => {
  const cart = await getCartWithProducts(query?.id);

  if (!cart) {
    return { notFound: true };
  }

  return { props: { cart } };
};
