import type { Cart, CartSummary, Product } from "./interfaces";

const shortenString = (str: string, to: number = 25): string => {
  return str.length > to ? str.slice(0, to) + "..." : str;
};

type ServerProduct = Omit<Product, "price"> & { price: number };

export const getAllProducts = async (): Promise<Product[]> => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) =>
      data.map((p: ServerProduct) => ({
        ...p,
        price: p.price.toFixed(2),
        title: shortenString(p.title),
      }))
    );
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

  return fetch("https://fakestoreapi.com/products/" + id)
    .then((res) => res.json())
    .then((data: ServerProduct) => ({ ...data, price: data.price.toFixed(2) }));
};

export const getCart = async (cartId: number = 1): Promise<CartSummary> => {
  return fetch("https://fakestoreapi.com/carts/" + cartId).then((res) =>
    res.json()
  );
};

export const getCartWithProducts = async (
  cartId?: string | string[]
): Promise<Cart | undefined> => {
  if (!cartId || Array.isArray(cartId)) return;

  const cart = await getCart(parseInt(cartId, 10));

  if (!cart) {
    return;
  }

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

  const subtotal = formatted.reduce((sub, product) => {
    const numericPrice = parseInt(product.price, 10);

    return sub + product.quantity * numericPrice;
  }, 0);

  const shipping = 5;
  const tax = 7.43;

  const orderSummary = {
    subtotal: subtotal.toFixed(2),
    shipping: shipping.toFixed(2),
    tax: shipping.toFixed(2),
    total: (subtotal + shipping + tax).toFixed(2),
  };

  return {
    ...cart,
    orderSummary,
    products: formatted,
  };
};
