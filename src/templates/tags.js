import React from 'react';
// import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Card from '../components/Card';
import Seo from '../components/seo';
import ShowTags from '../components/showTags';

import * as styles from './tags.module.scss';

const Tags = ({ data, pageContext }) => {
  return (
    <Layout>
      <Seo title="Статьи" description={`Статьи психолога Яны Тимощук на тему ${pageContext.tag}`} />
      <div className={`${styles.container}`}>
        <main className={styles.postsList}>
          {data.allMdx.edges.map(({ node }) => {
            return (
              <Card
                image={node.frontmatter.image ? node.frontmatter.image : ''}
                key={node.id}
                category={node.frontmatter.tags.map((tag, i) => {
                  return (
                    <Link key={`${node.id}_${i + 1}`} to={`/blog/${tag}`}>
                      {tag}
                    </Link>
                  );
                })}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                link={`/${node.frontmatter.url}`}
              />
            );
          })}
        </main>
        <aside className={styles.aside}>
          <ShowTags />
        </aside>
      </div>
    </Layout>
  );
};

// Tags.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allMdx: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               title: PropTypes.string.isRequired,
//             }),
//             fields: PropTypes.shape({
//               slug: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired,
//       ),
//     }),
//   }),
// };

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
          id
          frontmatter {
            title
            url
            description
            tags
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
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
