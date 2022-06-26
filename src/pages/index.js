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
        <div className={about.flexIntro}>
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
        <h2>Кратко обо мне</h2>
        <ul>
          <li>
            опыт работы психологом <strong>{new Date().getFullYear() - 2015} лет</strong>
          </li>
          <li>член Международного Союза Сказкотерапевтов</li>
          <li>
            автор книги «
            <a href="https://timoshchuk.ru/book" rel="noreferrer" target="_blank">
              Измерение Добрых Измерений
            </a>
            »
          </li>
          <li>сертифицированный сказкотерапевт-консультант</li>
          <li>автор методических пособий для педагогов и психологов</li>
          <li>500+ проведенных индивидуальных консультаций</li>
        </ul>
        <h2>Образование и повышение квалификации</h2>
        <ul>
          <li>
            магистр психологии (Восточно-украинский национальный университет им. Владимира Даля)
          </li>
          <li>2015: базовый курс сказкотерапии, квалификация «Сказкотерапевт-практик»</li>
          <li>
            2016: слушатель лекций по основам воспитания девочек и мальчиков (от основателя
            авторского метода комплексной Сказкотерапии Т.Д. Зинкевич-Евстигнеевой)
          </li>
          <li>2016–2018: мастерская консультирования, квалификация «Сказкотерапевт-консультант»</li>
          <li>
            2018 год: прошла подготовку в области психологии в рамках углубления содержания
            авторского метода комплексной сказкотерапии по программе «Сила Рода. Голос Предков»
          </li>
          <li>
            2019 по н.в.: обучение в программе по работе с Родом «Голос Предков», квалификация
            «Специалист по работе с Родом»
          </li>
          <li>
            2021: ведущая мастер-классов на Четвёртом Фестивале сказкотерапевтов Юга России в г.
            Краснодаре
          </li>
        </ul>
        <h2>Дипломы</h2>
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
          <StaticImage
            className={about.diploma}
            src="../images/d4.jpg"
            alt="Диплом 4"
            quality="100"
          />
          <StaticImage
            className={about.diploma}
            src="../images/d5.jpg"
            alt="Диплом 5"
            quality="100"
          />
          <StaticImage
            className={about.diploma}
            src="../images/d6.jpg"
            alt="Диплом 6"
            quality="100"
          />
        </div>
        <h2>С чем ко мне обращаются</h2>
        <ul>
          <li>
            <strong>сложно справиться с эмоциями</strong>
            <ul>
              <li>не умеешь говорить «нет»</li>
              <li>копишь злость, а потом резко взрываешься</li>
              <li>избегаешь конфликтов, но все-равно в них попадаешь</li>
              <li>боишься быть собой, проявляться</li>
              <li>страдаешь от панических атак и постоянной тревоги</li>
              <li>годами хранишь обиды и не можешь отпустить ситуацию</li>
              <li>постоянно чувствуешь вину по поводу и без</li>
            </ul>
          </li>
          <li>
            <strong>мамы, у которых уже «сдают нервы»</strong>
            <ul>
              <li>ребёнок истерит или не слушается</li>
              <li>дети никак не могут найти общий язык</li>
              <li>вспышки гнева и потом чувство вины</li>
              <li>хочется сбежать</li>
              <li>конфликты с супругом</li>
              <li>энергия на нуле</li>
            </ul>
          </li>
          <li>
            <strong>есть постоянное чувство усталости</strong>
            <ul>
              <li>лень, а потом вина за безделье</li>
              <li>постоянное напряжение и тревога</li>
              <li>выгорание и стресс</li>
            </ul>
          </li>
          <li>
            <strong>хочется наладить отношения с близкими/партнером</strong>
          </li>
          <li>
            <strong>хочется научиться отстаивать свои границы и чувства</strong>
          </li>
          <li>
            <strong>не нравится то, чем занимаешься, но не знаешь на что менять</strong>
          </li>
        </ul>
        {/* <h2>Методы работы</h2>
        <ul>
          <li>сказкотерапия</li>
          <li>арт-терапия</li>
          <li>песочная терапия</li>
        </ul> */}
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
