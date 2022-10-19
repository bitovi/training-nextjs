## Exercise 2

The most important section of an eCommerce store is the product catalog. Let’s get ours started. Create the needed infrastructure for catalog routes and any selected product.

### Part One

Let’s start by creating the catalog page; we will want to have multiple pages under the `/catalog` route. It should take the following props.

```ts
import type { Product } from "@shared/products";

interface CatalogProps {
  products: Product[];
}
```

Once you set up this page, add a CSS module of the same name and include the following markup and styles.

**Markup**

```tsx
<>
  <h1>Catalog</h1>
  <div className={styles.grid}>
    {products.map((product) => (
      <div key={product.id} className={styles.product}>
        <img
          alt={product.title}
          src={product.image}
          className={styles.productImage}
        />
        <p className={styles.productTitle}>{product.title}</p>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>${product.price}</p>
      </div>
    ))}
  </div>
</>
```

**Styles**

```css
.grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 2rem;
}

.product {
  border-radius: var(--border-radius);
  padding: var(--spacing);
  background-color: #f5f5f5;
}

.productInformationContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product:hover {
  background-color: var(--bitovi-red-50);
  cursor: pointer;
  box-shadow: var(--shadow-elevation-low);
}

.productImage {
  max-width: 100%;
  border-radius: var(--border-radius);
  aspect-ratio: 1;
}

.productTitle {
  font-weight: bold;
  font-size: 18px;
  margin: var(--spacing) 0 0 0;
}

.category {
  margin: 0;
  color: #777;
}

.price {
  margin: var(--spacing) 0 0 0;

  font-size: 18px;
}
```

To get this page functional and rendering products will need to add some special functions to the page. Don’t worry about what these do; we will cover it in the next section.

```ts
import type { GetStaticProps } from "next";
import { getAllProducts } from "@shared/products";

// ... page component

export const getStaticProps: GetStaticProps<CatalogProps> = async () => {
  const products = await getAllProducts();

  return { props: { products } };
};
```

Once completed, check your work by running `npm run dev` and navigating to `/catalog`. You should see some products in a grid!

## Part Two

Now that we’ve set up the catalog page, we need to create our product page.

```ts
import type { Product } from "@shared/products";

interface CatalogItemsProps {
  product: Product;
}
```

Once you set up this page, add a CSS module of the same name and include the following markup and styles.
**Markup**

```tsx
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
```

**Styles**

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
  align-items: center;
  background-color: #f5f5f5;
  border-radius: var(--border-radius);
  padding: calc(var(--spacing) * 2);
  gap: var(--spacing);
  max-width: 1000px;
}

.productImage {
  height: 500px;
  border-radius: var(--border-radius);
  padding: var(--spacing);
  background-color: white;
}

.secondaryText {
  color: #777;
}

.price {
  font-size: 18px;
}

.button {
  width: 100%;
  height: 50px;
  border-radius: var(--border-radius);
  margin: calc(var(--spacing) * 2) 0;

  font-size: 24px;
  border: var(--bitovi-red-600);
  background-color: var(--bitovi-red-600);
  color: white;
}

.button:hover {
  cursor: pointer;

  background-color: var(--bitovi-red-800);
}
```

To get this page functional and rendering products will need to add some special functions to the page. Don’t worry about what these do; we will cover it in the next section.

```ts
import type { GetStaticPaths, GetStaticProps } from "next";
import type { Product } from "@shared/products";

import { getProductById } from "@shared/products";

export const getStaticProps: GetStaticProps<
  CatalogItemsProps,
  { id: string }
> = async ({ params }) => {
  const product = await getProductById(params?.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return { props: { product } };
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});
```

Once completed, check your work by running `npm run dev` and navigating to `/catalog/1`. You should see the product’s detail.
