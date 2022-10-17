import type { NextPage, GetStaticProps } from "next";
import type { About } from "@shared/about";
import AboutUs from "src/scenes/About/About";

import { getAboutUsContent } from "@shared/about";


}

const AboutPage = ({ aboutUs }: any) => {
  return (
    <AboutUs aboutUs={aboutUs}/>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  const aboutUs = await getAboutUsContent();

  return { props: { aboutUs }, revalidate: 35 };
};
