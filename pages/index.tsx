import type { NextPage } from "next";
import Link from "next/link";

import styles from "./index.module.css";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New Arrivals are Here!</h1>
      <h2 className={styles.subtitle}>
        The new arrivals have, well, newly arrived. Checkout the latest options
        from our summer small-batch release while they are still in stock!
      </h2>
      <Link href="/catalog">
        <button className={styles.button}>Shop Now!</button>
      </Link>
    </div>
  );
};

export default IndexPage;
