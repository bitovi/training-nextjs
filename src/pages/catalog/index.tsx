import type { GetStaticProps, NextPage } from "next";
import type { Product } from "@shared/products";

import Link from "next/link";

import { getAllProducts } from "@shared/products";

import styles from "./index.module.css";

interface CatalogProps {
  products: Product[];
}

const CatalogPage: NextPage<CatalogProps> = ({ products }) => {
  return (
    <>
      <h1>Catalog</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <Link key={product.id} href={`/catalog/${product.id}`}>
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

export default CatalogPage;

export const getStaticProps: GetStaticProps<CatalogProps> = async () => {
  const products = await getAllProducts();

  return { props: { products } };
};
