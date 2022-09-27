import Image from "next/image";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.Bitovi.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Built by
        <span className={styles.logo}>
          <Image
            src="/bitovi-red.png"
            alt="Bitovi Logo"
            width={72}
            height={24}
          />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
