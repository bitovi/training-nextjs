import CatalogCatchAll from "@scenes/Catalog/CatalogCatchAll";
import { NextPage } from "next";
import Link from "next/link";

import styles from "./[...catch-all].module.css";

const CatchAllPage: NextPage = () => {
  return (
   <CatalogCatchAll/>
  );
};

export default CatchAllPage;
