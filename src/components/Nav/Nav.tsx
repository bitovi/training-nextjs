import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <Image src="/bitovi-red.png" alt="Vercel Logo" width={100} height={30} />
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link href="/cart">
            <a className={styles.link}>Cart</a>
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link href="/user">
            <a className={styles.link}>User</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
