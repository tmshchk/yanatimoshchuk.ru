import React from 'react';
import { Link } from 'gatsby';

import * as styles from './Card.module.scss';

function Card({ category, title, description, link }) {
  return (
    <article className={styles.body}>
      <p className={styles.category}>{category}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Link to={link}>
        <button className={styles.button}>Прочитать</button>
      </Link>
    </article>
  );
}

export default Card;
