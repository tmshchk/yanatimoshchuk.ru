import * as React from 'react';

import * as styles from './footer.module.scss';

const Footer = () => (
  <footer>
    <p className={styles.p}>
      Сделал с 💜{' '}
      <a href="https://timoshchuk.ru" rel="noreferrer" target="_blank">
        Александр Тимощук
      </a>
    </p>
  </footer>
);

export default Footer;
