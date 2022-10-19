## Exercise 2

Let’s take a step back and return to our catalog item page. Previously, we mentioned adding some functions to the page and said we’d get back to them a little later; that time has come. Inside the page, we can see that getStaticProps has already been implemented, and with our newfound understanding, we can figure out what it does.

```ts
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
```

Given the item id inside the params object, it fetches the product and passes it to the page. But there's an issue. Currently, we have not fully implemented getStaticPaths. The goal of this exercise is to finish up this function using getAllProductIds which can be found here.

```ts
import { getAllProductIds } from "@shared/products";
```

This page should block if the page isn’t generated at build time.
