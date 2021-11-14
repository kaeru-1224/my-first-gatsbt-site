import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
const Blog = ({ data }) => {
  const title = "Blog";
  return (
    <Layout PageTitle={title}>
      <ul>
        {data.allMdx.nodes.map((node) => {
          return (
            <article>
              <h2 key={node.frontmatter.id}> {node.frontmatter.title}</h2>
              <p>{node.frontmatter.date}</p>
              <MDXRenderer>{node.body}</MDXRenderer>
            </article>
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY/MM/DD")
        }
        id
        body
      }
    }
  }
`;

//블로그 포스트 만들기로이동

export default Blog;
