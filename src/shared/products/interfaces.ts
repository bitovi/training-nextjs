export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface BaseCart {
  id: string;
  userId: string;
  date: Date;
}
export interface CartSummary extends BaseCart {
  products: { productId: Product["id"]; quantity: number }[];
}

export interface Cart extends BaseCart {
  products: Array<{ quantity: number } & Product>;
  orderSummary: {
    subtotal: string;
    shipping: string;
    tax: string;
    total: string;
  };
}
