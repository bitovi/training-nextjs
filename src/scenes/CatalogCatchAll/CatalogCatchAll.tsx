import Link from "next/link";

import styles from "./CatalogCatchAll.module.css"

const CatalogCatchAll = () =>{
  return (
    <div className={styles.container}>
      <h1>We cannot find what you are looking for</h1>
      <h2>Maybe you can find it in our catalog.</h2>
      <Link href="/catalog">
        <button className={styles.button}>To Catalog</button>
      </Link>
    </div>
  );
}

export default CatalogCatchAll