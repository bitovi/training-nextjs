import styles from "./AboutSection.module.css"

interface AboutSectionProps {
  title: string,
  description: string,
}

const AboutSection = ({title, description}: AboutSectionProps) => {
  return (
    <div className={styles.aboutSection}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};


export default AboutSection