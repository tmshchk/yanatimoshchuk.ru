import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Header from '../components/header';
import Footer from '../components/footer';

import * as styles from './tags.module.scss';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  // const tagHeader = `${totalCount} ${totalCount === 1 ? 'запись' : 'записи'} tagged with "${tag}"`;
  const tagHeader = `Записи в рубрике «${tag}»`;

  return (
    <>
      <Header />
      <main className={`${styles.container} ${styles.page}`}>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node;
            const { title, url } = node.frontmatter;
            return (
              <li key={slug}>
                <Link to={`/${url}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <Link to="/tags" className={styles.button}>
          Посмотреть все рубрики
        </Link>
      </main>
      <Footer />
    </>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          slug
          frontmatter {
            title
            url
          }
        }
      }
      nodes {
        frontmatter {
          title
          url
        }
      }
    }
  }
`;