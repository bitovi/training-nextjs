import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Product } from "@shared/products";

import { getProductById, getAllProductIds } from "@shared/products";

import styles from "./[id].module.css";

interface CatalogProps {
  product: Product;
}

const CatalogItemPage: NextPage<CatalogProps> = ({ product }) => {
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

export default CatalogItemPage;

export const getStaticProps: GetStaticProps<
  CatalogProps,
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

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const products = await getAllProductIds();

  const paths = products.map((id) => {
    return { params: { id: id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};