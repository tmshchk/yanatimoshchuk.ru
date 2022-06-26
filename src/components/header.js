import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from '../components/header.module.scss';

const Header = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <header>
      <nav className={styles.navMobile}>
        <div className={isOpen ? `${styles.sidebar} ${styles.sidebarOpen}` : styles.sidebar}>
          <button onClick={(e) => setOpen(!isOpen)} className={styles.menuButton}>
            Меню
          </button>
          <Link onClick={(e) => setOpen(!isOpen)} activeClassName={styles.activeLink} to="/">
            Обо мне
          </Link>
          <Link onClick={(e) => setOpen(!isOpen)} activeClassName={styles.activeLink} to="/blog/">
            Статьи
          </Link>
          <Link
            onClick={(e) => setOpen(!isOpen)}
            activeClassName={styles.activeLink}
            to="/contacts">
            Контакты
          </Link>
          <Link
            onClick={(e) => setOpen(!isOpen)}
            activeClassName={styles.activeLink}
            className={styles.consultation}
            to="/#how-to-get-consultation">
            Консультация
          </Link>
        </div>
      </nav>
      <nav className={styles.nav}>
        <Link activeClassName={styles.activeLink} to="/">
          Обо мне
        </Link>
        <Link activeClassName={styles.activeLink} to="/blog/">
          Статьи
        </Link>
        <Link activeClassName={styles.activeLink} to="/contacts">
          Контакты
        </Link>
        <Link
          activeClassName={styles.activeLink}
          className={styles.consultation}
          to="/#how-to-get-consultation">
          Консультация
        </Link>
      </nav>
    </header>
  );
};

export default Header;
