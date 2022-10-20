import { Product } from "@shared/products";

import Link from "next/link";

import styles from "./Catalog.module.css"

export interface CatalogProps {
  products: Product[];
}

const Catalog = ({products}: CatalogProps) => {
  return (
    <>
      <h1>Catalog</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <Link href={`/catalog/${product.id}`} key={product.id}>
            <div className={styles.product}>
              <img
                alt={product.title}
                src={product.image}
                className={styles.productImage}
              />
              <p className={styles.productTitle}>{product.title}</p>
              <p className={styles.category}>{product.category}</p>
              <p className={styles.price}>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Catalog