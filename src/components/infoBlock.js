import React from 'react';

import * as styles from '../pages/info/info.module.scss';

function infoBlock({ badge, title, description, link, buttonText }) {
  return (
    <article className={styles.article}>
      <h3 className={styles.h3}>
        {badge ? <span className={styles.badge}>{badge}</span> : ''}
        {title}
      </h3>
      {description ? <p className={styles.p}>{description}</p> : ''}
      <button onClick={(e) => window.open(`${link}`)} className={styles.button}>
        {buttonText}
      </button>
    </article>
  );
}

export default infoBlock;
