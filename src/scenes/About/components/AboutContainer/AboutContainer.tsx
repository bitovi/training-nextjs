import { ReactNode } from "react";
import styles from "./AboutContainer.module.css";

const AboutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1 className={styles.title}>About Us!</h1>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default AboutContainer;
