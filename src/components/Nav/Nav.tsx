import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <Image src="/bitovi-red.png" alt="Bitovi Logo" width={100} height={30} />
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link href="/cart?id=1">
            <a className={styles.link}>Cart</a>
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
