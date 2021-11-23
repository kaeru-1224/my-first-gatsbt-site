import * as React from "react";

import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const HomepageMain = () => {
  return (
    <>
      <Layout PageTitle="Home" PageHeading="Welcome to my Gatsby site!">
        <p>I'm making this by following Gatsby Tutorial. </p>
        <StaticImage src="/home/didi/바탕화면/GatTry/my-first-gatsbt-site/src/images/original.jpeg" />
      </Layout>
    </>
  );
};

export default HomepageMain;
