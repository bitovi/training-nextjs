import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";

import "../styles/global.css";

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />{" "}
    </Layout>
  );
}
