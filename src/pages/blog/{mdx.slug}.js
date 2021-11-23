import { graphql } from "gatsby";
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.frog_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.frog_image_alt} />

      <p>
        Credit:{" "}
        <a href={data.mdx.frontmatter.frog_image_credit_link} target="_blank">
          {data.mdx.frontmatter.frog_image_credit_text}{" "}
        </a>
      </p>

      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};
console.log(BlogPost);

//id에 일치하는 값만 받아주었으므로, 이와같은 쿼리를 이용해주었음
//전체 쿼리를 받아 해결하는 것보다, 특정 쿼리를 받아 이용해주는 것이 용이
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        frog_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        frog_image_alt
        frog_image_credit_link
        frog_image_credit_text
      }
      body
    }
  }
`;
export default BlogPost;
