import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
const Blog = ({ data }) => {
  const title = "Blog";
  return (
    <Layout PageTitle={title}>
      <ul>
        {data.allMdx.nodes.map((node) => {
          return (
            <article key={node.frontmatter.id}>
              <Link to={`/blog/${node.slug}`}> {node.frontmatter.title}</Link>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

//블로그 포스트 만들기로이동

export default Blog;
