import type {About} from "@shared/about"

import AboutContainer from "./components/AboutContainer";
import AboutSection from "./components/AboutSection"
import styles from "./about.module.css"
interface AboutPageProps {
  aboutUs: About;
}


const AboutUs= ({ aboutUs }:AboutPageProps) => {
  return (
    <AboutContainer>
        <AboutSection title={aboutUs.location.title} description={aboutUs.location.description} />
        <AboutSection title={aboutUs.about.title} description={aboutUs.about.description} />
        <AboutSection title={aboutUs.team.title} description={aboutUs.team.description} />
      </AboutContainer>


  );
};

export default AboutUs;