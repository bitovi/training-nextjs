## Helpful Code Snippets

Typing a Page

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
