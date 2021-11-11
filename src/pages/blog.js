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

//블로그 포스트 만들기로이동

export default Blog;
