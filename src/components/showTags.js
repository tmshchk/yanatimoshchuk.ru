import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import * as styles from './showTags.module.scss';

function ShowTags() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
  `);

  const tagsArray = [];

  data.allMdx.nodes.map((post) => {
    post.frontmatter.tags.map((tag) => tagsArray.push(tag));
  });

  let unique = [...new Set(tagsArray.map((item) => item))];

  return (
    <>
      <h2 className={styles.asideTitle}>Рубрики</h2>
      <ul>
        <li>
          <Link activeClassName={styles.activeLink} to="/blog">
            все рубрики
          </Link>
        </li>
        {unique.map((tag, i) => (
          <li key={i}>
            <Link activeClassName={styles.activeLink} to={`/blog/${tag}`}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShowTags;
