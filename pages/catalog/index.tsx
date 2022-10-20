import type { NextPage, GetStaticProps } from "next";


import { getAllProducts } from "@shared/products";

import Catalog from "@scenes/Catalog/";
import { CatalogProps } from "@scenes/Catalog/";

const CatalogPage: NextPage<CatalogProps> = ({ products }) => {
  return <Catalog products={products} />;
};

export default CatalogPage;

export const getStaticProps: GetStaticProps<CatalogProps> = async () => {
  const products = await getAllProducts();

  return { props: { products } };
};
