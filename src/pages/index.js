import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import * as about from '../components/about.module.scss';
import * as styles from '../components/index.module.scss';

function IndexPage() {
  return (
    <Layout>
      <Seo title="Обо мне" description="О психологе, сказкотерапевте Яне Тимощук" />
      <main className={`${styles.container} ${about.page}`}>
        <h1>
          <span>Психологические консультации</span>
          <br /> для детей и взрослых
        </h1>
        <div className={about.flex}>
          <p>
            Меня зовут <span>Яна Тимощук</span>.
            <br />
            <br />
            Магистр психологии, психолог-практик, сказкотерапевт.
            <br />
            <br />
            Веду частную практику: индивидуальные психологические консультации для детей, взрослых и
            семейных пар.
            <br />
            <br />
            Очные и групповые консультации веду в Краснодаре: ул. Ставропольская, 87/2 — детский
            центр «Островок тепла».
            <br />
            <br />
            Онлайн-консультации по всему миру: Скайп, Зум, Вацап.
          </p>
          <StaticImage
            className={about.photo}
            src="../images/yanatimoshchuk.png"
            alt="Яна Тимощук, психолог, сказкотерапевт"
            quality="100"
          />
        </div>
        <h2>Образование и дипломы</h2>
        <ul>
          <li>магистр психологии</li>
          <li>автор книги «Измерение Добрых Измерений»</li>
          <li>сертифицированный сказкотерапевт-консультант</li>
          <li>автор методических пособий для педагогов и психологов</li>
          <li>500+ проведенных индивидуальных консультаций, мастер-классов и курсов</li>
        </ul>
        <div className={about.flex}>
          <StaticImage
            className={about.diploma}
            src="../images/d1.jpeg"
            alt="Диплом 1"
            quality="100"
          />
          <StaticImage
            className={about.diploma}
            src="../images/d2.jpeg"
            alt="Диплом 2"
            quality="100"
          />
          <StaticImage
            className={about.diploma}
            src="../images/d3.jpeg"
            alt="Диплом 3"
            quality="100"
          />
        </div>
        <h2>С чем ко мне обращаются</h2>
        <ul>
          <li>вопросы по отношениям</li>
          <li>воспитание детей</li>
          <li>адаптация к детскому саду</li>
          <li>страхи и фобии</li>
        </ul>
        <h2>Методы работы</h2>
        <ul>
          <li>сказкотерапия</li>
          <li>арт-терапия</li>
          <li>песочная терапия</li>
        </ul>
        <h2 id="how-to-get-consultation">Как попасть на консультацию</h2>
        <ul>
          <li>перед консультацией необходимо заполнить анкету</li>
          <li>чтобы открыть анкету, нажмите на кнопку ниже</li>
          <li>
            после изучения анкеты я свяжусь с вами для уточнения деталей и вышлю ссылку для оплаты
            консультации
          </li>
          <li>
            после оплаты консультации мы встречаемся с вами в согласованный день очно или онлайн
          </li>
        </ul>
        <div className={about.blockPrice}>
          <button
            onClick={(e) =>
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSco12TTRF1fzvH1wwI1RZota1vhgwupJfjONXczL4w4UztmYA/viewform',
              )
            }
            className={about.button}>
            Заполнить анкету
          </button>
          {/* <p className={about.price}>2 000₽</p> */}
        </div>
      </main>
    </Layout>
  );
}

export default IndexPage;
