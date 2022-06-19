import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from '../components/header.module.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <Link activeClassName={styles.activeLink} to="/">
          Обо мне
        </Link>
        <Link activeClassName={styles.activeLink} to="/blog">
          Статьи
        </Link>
        <Link activeClassName={styles.activeLink} to="/tags">
          Рубрики
        </Link>
        <Link activeClassName={styles.activeLink} to="/contacts">
          Контакты
        </Link>
      </nav>
    </header>
  );
};

export default Header;
