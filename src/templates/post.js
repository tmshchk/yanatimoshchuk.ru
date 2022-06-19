import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import Seo from '../components/seo';

import * as post from '../components/BlogPost.module.scss';

function BlogPost({ data }) {
  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title} />
      <main className={`${post.container} ${post.body}`}>
        <article>
          <h2 className={post.title}>{data.mdx.frontmatter.title}</h2>
          <p className={post.category}>
            Опубликован <span>{data.mdx.frontmatter.date}</span>
            <br />
            Рубрика:{' '}
            <span>
              {data.mdx.frontmatter.tags.map((tag) => {
                return (
                  <Link to={`/tags/${tag}`} className={post.categoryLink}>
                    {tag}
                  </Link>
                );
              })}
            </span>
          </p>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
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
        date(formatString: "DD.MM.YYYY")
      }
      body
      id
      slug
    }
  }
`;

export default BlogPost;
