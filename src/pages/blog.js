import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

const Blog = ({ data }) => {
  const title = "Blog";
  console.log(data);
  return (
    <Layout PageTitle={title}>
      <ul>
        {data.allFile.nodes.map((node) => {
          return <li key={node.id}> {node.name}</li>;
        })}
      </ul>
    </Layout>
  );
};
export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

//블로그 포스트 만들기로이동

export default Blog;
