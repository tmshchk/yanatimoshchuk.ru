import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
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
      <Seo title="Статьи" description="Статьи психолога, сказкотерапевта Яны Тимощук" />
      <div className={styles.container}>
        <main className={styles.postsList}>
          {data.allMdx.nodes.map((post, i) => (
            <Card
              image={post.frontmatter.image ? post.frontmatter.image : ''}
              key={post.id}
              category={post.frontmatter.tags.map((tag, i) => {
                return (
                  <Link key={i} to={`/blog/${tag}`}>
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
              <Link className={styles.a} to={`/blog/${prevPage}`} rel="prev">
                ←
              </Link>
            )}
            {numPages !== 1
              ? Array.from({ length: numPages }, (_, i) => (
                  <Link
                    key={`pagination-number${i + 1}`}
                    to={`/blog/${i === 0 ? '' : i + 1}`}
                    className={styles.a}
                    activeClassName={styles.activeLink}>
                    {i + 1}
                  </Link>
                ))
              : ''}
            {!isLast && (
              <Link className={styles.a} to={`/blog/${nextPage}`} rel="next">
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
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        body
        slug
      }
    }
  }
`;
