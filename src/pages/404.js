import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import * as about from '../components/about.module.scss';
import * as styles from '../components/index.module.scss';

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="Страница не найдена" />
      <main className={`${styles.container} ${about.page}`}>
        <h1>Страница не найдена 😔</h1>
        <p>
          К сожалению, данной страницы не существует или она не найдена.
          <br />
          <br />
          Возможно, вы найдёте что-то подходящее в{' '}
          <Link to="/blog" className={about.link}>
            блоге
          </Link>{' '}
          😉
        </p>
      </main>
    </Layout>
  );
}

export default NotFoundPage;
