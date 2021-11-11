import * as React from "react";
import Layout from "../components/layout";

const Blog = () => {
  const title = "Blog";
  return (
    <Layout PageTitle={title}>
      <p>this is children</p>
    </Layout>
  );
};

export default Blog;
