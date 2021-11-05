import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const HomepageMain = () => {
  return (
    <>
      <Layout PageTitle="Home" PageHeading="Welcome to my Gatsby site!">
        {" "}
        <p>I'm making this by following Gatsby Tutorial.</p>
      </Layout>

      <StaticImage
        src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/206220322_359341372216993_2636380920620117809_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=hkNx8Hw5RfwAX9XoT7A&_nc_ht=scontent-ssn1-1.xx&oh=394d83f6c2d4f6142cb09b2dde6cbd88&oe=61AAC765"
        alt="kerropi"
      />
    </>
  );
};

export default HomepageMain;
