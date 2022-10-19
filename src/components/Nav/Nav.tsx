import Image from "next/image";
import Link from "next/link";

import NavItem from "./components/NavItem";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <Image src="/bitovi-red.png" alt="Vercel Logo" width={100} height={30} />
      <ul className={styles.navList}>
        <NavItem href="/" label="Home" />
        <NavItem href="/cart?id=1" label="Cart" />
        <NavItem href="/about" label="About" />
      </ul>
    </nav>
  );
};

export default Nav;
