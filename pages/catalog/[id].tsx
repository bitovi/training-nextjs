import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Product as ProductType } from "@shared/products";
import ProductScene from "@scenes/Product"
import { getProductById, getAllProductIds } from "@shared/products";

interface CatalogProps {
  product: ProductType;
}

const ProductPage: NextPage<CatalogProps> = ({ product }) => {
  return (
    <ProductScene product={product}/>
  );
};

export default ProductPage;

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
