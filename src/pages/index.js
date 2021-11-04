import * as React from "react";
import { Link } from "gatsby";

const HomepageMain = () => {
  return (
    <main>
      <title>HomePage</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following Gatsby Tutorial.</p>
      <Link to="/about">About page</Link>
      <br></br>
      <Link to="/contact">conatct page</Link>
    </main>
  );
};

export default HomepageMain;
