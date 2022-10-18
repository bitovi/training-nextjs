## Helpful Code Snippets

```ts
import type { NextPage } from "next";

interface Props {
  name: string;
}

const PageWithoutProps: NextPage = () => {
  /** implementation detail */
};
const PageWithProps: NextPage<Props> = () => {
  /** implementation detail */
};
```
