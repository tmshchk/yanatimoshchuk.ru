import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';

import * as page from '../components/index.module.scss';
import * as styles from '../components/about.module.scss';
import * as contacts from '../components/contacts.module.scss';

function ContactsPage() {
  return (
    <Layout>
      <Seo title="Контакты" description="Как связаться с психологом Яной Тимощук" />
      <main className={`${page.container} ${styles.page} ${contacts.link}`}>
        <h1>Контакты</h1>
        <h2>Очные консультации</h2>
        <p>Краснодар, ул. Ставропольская, 87/2 — детский центр «Островок тепла».</p>
        <h2>Социальные сети</h2>
        <ul>
          <li>
            <a href="https://instagram.com/yana.timoshchuk" rel="noreferrer" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://vk.com/raduga.skazok" rel="noreferrer" target="_blank">
              ВКонтакте
            </a>
          </li>
        </ul>
        <h2>Электронная почта и мессенджеры</h2>
        <ul>
          <li>
            <a href="mailto:info@timoshchuk.ru" rel="noreferrer">
              info@timoshchuk.ru
            </a>
          </li>
          <li>
            <a href="https://t.me/radugaskazok" rel="noreferrer" target="_blank">
              Telegram-канал «Заметки сказкотерапевта»
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=79604856891&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.+%D0%9C%D0%BE%D0%B9+%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%3A+&app_absent=0"
              rel="noreferrer"
              target="_blank">
              WhatsApp
            </a>
          </li>
        </ul>
      </main>
    </Layout>
  );
}

export default ContactsPage;
