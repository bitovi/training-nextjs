import type { ReactNode } from "react";
import Footer from "./Footer";

import styles from "./Layout.module.css";
import Nav from "./Nav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.content}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
