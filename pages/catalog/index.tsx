import type { NextPage, GetStaticProps } from "next";
import type { Product } from "@shared/products";

import Link from "next/link";

import { getAllProducts } from "@shared/products";

import Catalog from "src/scenes/Catalog";
import { CatalogProps } from "src/scenes/Catalog";

const CatalogPage = ({ products }: CatalogProps) => {
  return <Catalog products={products} />;
};

export default CatalogPage;

export const getStaticProps: GetStaticProps<CatalogProps> = async () => {
  const products = await getAllProducts();

  return { props: { products } };
};
