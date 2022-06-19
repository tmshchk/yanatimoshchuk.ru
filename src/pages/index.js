import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import * as about from '../components/about.module.scss';
import * as styles from '../components/index.module.scss';

function IndexPage() {
  const onClickButton = () => {
    window.open(
      'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=timoshchuk&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%98%D0%BD%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20%D0%AF%D0%BD%D1%8B%20%D0%A2%D0%B8%D0%BC%D0%BE%D1%89%D1%83%D0%BA&OutSum=2000&SignatureValue=c6cee757e09f220f09edf9c734d99afb',
      '_blank',
    );
  };

  return (
    <Layout>
      <Seo title="Обо мне" />
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
        <h2>Как попасть на консультацию</h2>
        <ul>
          <li>оформите заказ, нажав на кнопку ниже</li>
          <li>заполните анкету, которая откроется после оплаты</li>
          <li>после изучения анкеты я свяжусь с вами для уточнения деталей и даты встречи</li>
          <li>в согласованный день мы встречаемся с вами очно или онлайн</li>
        </ul>
        <div className={about.blockPrice}>
          <button onClick={onClickButton} className={about.button}>
            Оформить заказ
          </button>
          <p className={about.price}>2 000₽</p>
        </div>
      </main>
    </Layout>
  );
}

export default IndexPage;
