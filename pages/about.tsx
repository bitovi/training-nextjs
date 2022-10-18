import type { NextPage, GetStaticProps } from "next";
import type { About } from "@shared/about";

import AboutUs from "@scenes/About/About";
import { getAboutUsContent } from "@shared/about";

interface AboutProps {
  aboutUs: About
}

const AboutPage: NextPage<AboutProps> = ({ aboutUs }) => {
  return (
    <AboutUs aboutUs={aboutUs}/>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  const aboutUs = await getAboutUsContent();

  return { props: { aboutUs }, revalidate: 35 };
};
