import type { Cart, CartSummary, Product } from "./interfaces";

export const getAllProducts = async (): Promise<Product[]> => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

export const getAllProductIds = async (): Promise<Array<number>> => {
  const products = await getAllProducts();

  return products.map(({ id }) => id);
};

export const getProductById = async (
  id?: string
): Promise<Product | undefined> => {
  if (!id) {
    return;
  }

  return fetch("https://fakestoreapi.com/products/" + id).then((res) =>
    res.json()
  );
};

export const getCart = async (cartId: number = 1): Promise<CartSummary> => {
  return fetch("https://fakestoreapi.com/carts/" + cartId).then((res) =>
    res.json()
  );
};

export const getCartWithProducts = async (
  cartId: number = 1
): Promise<Cart> => {
  const cart = await getCart(cartId);

  const products = await Promise.all(
    cart.products.map(({ productId }) => getProductById(productId.toString()))
  );

  const formatted = cart.products.map(({ productId, quantity }) => {
    const productInformation = products.find((p) => p?.id === productId);

    if (!productInformation) throw new Error("Product not found");

    return {
      ...productInformation,
      quantity,
    };
  });

  return {
    ...cart,
    products: formatted,
  };
};
