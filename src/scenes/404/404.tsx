
import styles from "./404.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404!</h1>
      <h2 className={styles.subtitle}>Whoops. This page is not available.</h2>
    </div>
  );
};

export default NotFound