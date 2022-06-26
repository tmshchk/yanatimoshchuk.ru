import React from 'react';
import { Link } from 'gatsby';

import * as styles from '../templates/post.module.scss';

export const PostLink = ({ children, to }) => {
  return (
    <Link className={styles.link} to={`/${to}`}>
      {children}
    </Link>
  );
};
