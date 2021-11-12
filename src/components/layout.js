import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  logoSize,
  siteTitle,
} from "./layout.module.css";

const Layout = ({ PageTitle, PageHeading, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <main className={container}>
      <title>
        {PageTitle}| {data.site.siteMetadata.title}
      </title>
      <nav>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <ul className={navLinks}>
          <Link to="/">
            <StaticImage
              className={logoSize}
              width={50}
              height={50}
              ral="logo"
              src="/home/didi/바탕화면/GatTry/my-first-gatsbt-site/src/images/icon.png"
            />
          </Link>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              HOME{" "}
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              ABOUT
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              CONTACT
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              BLOG
            </Link>
          </li>
        </ul>
      </nav>

      <h1 className={heading}>{PageHeading}</h1>
      {children}
    </main>
  );
};

export default Layout;
