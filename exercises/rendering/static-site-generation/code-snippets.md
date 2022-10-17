## Helpful Code Snippets

Types for `getStaticProps` and `getStaticPaths`.

```ts
// [id].tsx
import type { GetStaticPaths } from "next";

interface Params {
  id: string;
}

interface Props {
  name: string;
}

const Page: NextPage<Props> = ({ name }) => {
  // implementation detail
};

export default Page;

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const name = getNameFromId(params?.id);

  return { props: { name } };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  // ...
};
```
