import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as styles from './Card.module.scss';

function Card({ category, title, description, link, image }) {
  const img = getImage(image);
  return (
    <article>
      <Link to={link}>
        <GatsbyImage
          style={{
            width: '100%',
            height: '150px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
          }}
          image={img}
          alt={`Блог психолога Яны Тимощук: ${title}`}
        />
      </Link>
      <div className={styles.body}>
        <p className={styles.category}>{category}</p>
        <Link className={styles.textLink} to={link}>
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <p className={styles.description}>{description}</p>
        <Link to={link}>
          <button className={styles.button}>Прочитать</button>
        </Link>
      </div>
    </article>
  );
}

export default Card;
