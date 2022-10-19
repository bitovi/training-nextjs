import Link from "next/link";

import styles from "./NavItem.module.css"
interface NavItemProps{
  label: string,
  href: string,
}


const NavItem = ({label, href} : NavItemProps) => {

  
  return (
    <li className={styles.navListItem}>
      <Link href={href} passHref>
        <a className={styles.link}>{label}</a>
      </Link>
    </li>
  );
};


export default NavItem