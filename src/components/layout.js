import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ PageTitle, PageHeading }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME </Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <main>
        <title>{PageTitle}</title>
        <h1>{PageHeading}</h1>
      </main>
    </>
  );
};

export default Layout;
