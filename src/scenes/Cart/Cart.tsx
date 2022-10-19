import { Cart } from "@shared/products";

import styles from "./cart.module.css";
import CartItem from "./components/CartItem";
import SummaryItem from "./components/SummaryItem/";

const CartScene = ({ cart }: { cart: Cart }) => {
  return (
    <div className={styles.container}>
      <div>
        {cart.products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.orderSummary}>
        <p className={styles.summaryTitle}>Order Summary</p>
        <SummaryItem label="Subtotal" amount={cart.orderSummary.subtotal} />
        <SummaryItem label="Shipping" amount = {cart.orderSummary.shipping} />
        <SummaryItem label="Tax" amount ={cart.orderSummary.tax} />
        <SummaryItem label="Total" amount= {cart.orderSummary.tax} />
        <button className={styles.button}>Checkout</button>
      </div>
    </div>
  );
};

export default CartScene;
