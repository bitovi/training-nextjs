import type { NextPage, GetStaticProps } from "next";
import type { About } from "@shared/about";

import { getAboutUsContent } from "@shared/about";

import styles from "./about.module.css";

interface AboutPageProps {
  aboutUs: About;
}

const AboutPage: NextPage<AboutPageProps> = ({ aboutUs }) => {
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

export default AboutPage;

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const aboutUs = await getAboutUsContent();

  return { props: { aboutUs } };
};
