## Exercise

Let’s build out the cart page for our eCommerce store. We need to create a cart page with some styles to get started. It should accept the following props.

```ts
import type { Cart } from "@shared/products";

interface CartPageProps {
  cart: Cart;
}
```

**Markup**

```tsx
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
```

**Styles**

```css
.container {
  display: flex;
  align-items: center;
}

.productContainer {
  display: flex;
  align-items: center;
  padding: var(--spacing);
}

.productContainer:not(:last-child) {
  border-bottom: 1px solid var(--light-md);
}

.productImage {
  height: 150px;
  padding: var(--spacing);
}

.orderSummary {
  background-color: var(--background-gray);
  margin-left: calc(var(--spacing) * 2);
  padding: var(--spacing);
  border-radius: var(--border-radius);
  width: 400px;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.summaryTitle {
  font-size: 24px;
  font-weight: bold;
}

.summaryItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  font-weight: bold;
}

.secondaryText {
  color: var(--light-hv);
}

.button {
  width: 100%;
  height: 50px;
  border-radius: var(--border-radius);

  font-size: 24px;
  border: var(--bitovi-red-600);
  background-color: var(--bitovi-red-600);
  color: var(--light);
}

.button:hover {
  cursor: pointer;

  background-color: var(--bitovi-red-800);
}
```

Now that we have the page in place, we need to render it server-side. There is a function called `getCartWithProducts` that will request a cart from the backend given the proper `id`.

```ts
import { getCartWithProducts } from "@shared/products";
```

The cart link in the header on our site sends up the `id` needed to fetch the cart as a query param.

If a cart isn’t returned from the `getCartWithProducts` function, a 404 page should be displayed. Otherwise, the cart should be passed to our component.

To check this was implemented properly, navigate to `/cart?id=1` and a cart should be rendered. Navigate to `/cart` and see the 404 page we made in the last section.
