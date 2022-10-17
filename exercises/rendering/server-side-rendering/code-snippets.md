## Helpful Code Snippets

Types for `getServerSideProps`

```ts
import type { GetServerSideProps, NextPage } from "next";

interface Props {
  name: string;
}

const Page: NextPage<Props> = ({ name }) => {
  /** implementation detail */
};

export default Page;

interface QueryParams {
  id: string;
}

export const getServerSideProps: GetServerSideProps<
  Props,
  QueryParams
> = async ({ query }) => {
  const name = await getName(query?.id);

  return { props: { name } };
};
```

with `InferGetServerSidePropsType`

```ts
import type { NextPage, InferGetServerSidePropsType } from "next";

const Page: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ name }) => {
  /** implementation detail */
};

export const getServerSideProps = async () => {
  return { props: { name: "Sam" } };
};
```
