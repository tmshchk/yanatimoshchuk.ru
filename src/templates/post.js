import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import ShowTags from '../components/showTags';

import * as styles from '../components/BlogPost.module.scss';

function BlogPost({ data }) {
  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.description} />
      <main className={`${styles.container}`}>
        <article className={`${styles.body} ${styles.post}`}>
          <h2 className={styles.title}>{data.mdx.frontmatter.title}</h2>
          <p className={styles.category}>
            {data.mdx.frontmatter.date} в рубрике&nbsp;
            {data.mdx.frontmatter.tags.map((tag, i) => {
              return (
                <Link key={i} to={`/blog/${tag}`}>
                  {tag}
                </Link>
              );
            })}
          </p>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
        <aside className={styles.aside}>
          <ShowTags />
        </aside>
      </main>
    </Layout>
  );
}

export const PostQuery = graphql`
  query ($url: String) {
    mdx(frontmatter: { url: { eq: $url } }) {
      frontmatter {
        title
        tags
        url
        description
        date(formatString: "DD.MM.YYYY")
      }
      body
      id
      slug
    }
  }
`;

export default BlogPost;
