import styles from "./about.module.css"
import type {About} from "@shared/about"

interface AboutPageProps {
  aboutUs: About;
}


const AboutUs= ({ aboutUs }:AboutPageProps) => {
  return (
    <>
      <h1 className={styles.title}>About Us!</h1>
      <div className={styles.container}>
        <div className={styles.aboutSection}>
          <h2>{aboutUs.location.title}</h2>
          <p>{aboutUs.location.description}</p>
        </div>
        <div className={styles.aboutSection}>
          <h2>{aboutUs.about.title}</h2>
          <p>{aboutUs.about.description}</p>
        </div>
        <div className={styles.aboutSection}>
          <h2>{aboutUs.team.title}</h2>
          <p>{aboutUs.team.description}</p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;