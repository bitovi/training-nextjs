import type { GetServerSideProps, NextPage } from "next";
import type { Cart } from "@shared/products";

import { getCartWithProducts } from "@shared/products";

import styles from "./cart.module.css";
import CartScene from "src/scenes/Cart";

interface CartPageProps {
  cart: Cart;
}

const CartPage: NextPage<CartPageProps> = ({ cart }) => {
  return (
  <CartScene cart={cart} />)
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
