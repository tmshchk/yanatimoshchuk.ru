import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/header';
import Footer from '../components/footer';
import Seo from '../components/seo';
import ShowTags from '../components/showTags';
import Card from '../components/Card';

import * as styles from './blog.module.scss';

function BlogPage({ data, pageContext }) {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <Layout>
      <Seo title="Статьи" />
      <div className={styles.container}>
        <main className={styles.postsList}>
          {data.allMdx.nodes.map((post, i) => (
            <Card
              key={post.id}
              category={post.frontmatter.tags.map((tag) => {
                return (
                  <Link key={i} to={`/tags/${tag}`}>
                    {tag}
                  </Link>
                );
              })}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              link={`/${post.frontmatter.url}`}
            />
          ))}
          <nav className={styles.pagination}>
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ←
              </Link>
            )}
            {Array.from({ length: numPages }, (_, i) => (
              <Link key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? '' : i + 1}`}>
                {i + 1}
              </Link>
            ))}
            {!isLast && (
              <Link to={nextPage} rel="next">
                →
              </Link>
            )}
          </nav>
        </main>
        <aside className={styles.aside}>
          <ShowTags />
        </aside>
      </div>
    </Layout>
  );
}

export default BlogPage;

export const PostsQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: $limit, skip: $skip) {
      nodes {
        frontmatter {
          title
          description
          date(formatString: "DD.MM.YYYY")
          tags
          url
        }
        id
        body
        slug
      }
    }
  }
`;
