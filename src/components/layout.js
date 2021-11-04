import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ PageTitle, PageHeading }) => {
  return (
    <html>
      <header>
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
      </header>
      <main>
        <title>{PageTitle}</title>
        <h1>{PageHeading}</h1>
      </main>
    </html>
  );
};

export default Layout;
