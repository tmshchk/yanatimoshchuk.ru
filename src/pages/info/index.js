import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import InfoBlock from '../../components/infoBlock';

import * as info from './info.module.scss';
import * as styles from '../../components/index.module.scss';

function InfoPage() {
  return (
    <Layout>
      <Seo
        title="Полезные ссылки"
        description="Полезные материалы психолога, сказкотерапевта Яны Тимощук"
      />
      <main className={`${styles.container} ${info.page}`}>
        <div className={info.flexIntro}>
          <StaticImage
            className={info.photo}
            src="../../images/yanatimoshchuk.png"
            alt="Яна Тимощук, психолог, сказкотерапевт"
            quality="100"
          />
          <p className={info.textCenter}>
            <span>Яна Тимощук</span>
            <br />
            Психолог-практик, сказкотерапевт
          </p>
        </div>
        <hr className={info.hr} />
        <h2 className={info.h2}>Бесплатно</h2>
        <InfoBlock
          title="Мини-консультация"
          description="Консультация-знакомство, на которой я дам вам первые шаги для решения вашего запроса."
          link="https://docs.google.com/forms/d/e/1FAIpQLSco12TTRF1fzvH1wwI1RZota1vhgwupJfjONXczL4w4UztmYA/viewform"
          buttonText="Заполнить анкету"
        />
        <InfoBlock
          title="Ой, всё!"
          description="10 способов успокоиться, если накрывает волна раздражения"
          link="https://raduga-skazok.ru/lp/10s/"
          buttonText="Получить"
        />
        <InfoBlock
          title="Радуга Сказок"
          description="Мой авторский проект про сказкотерапию"
          link="https://raduga-skazok.ru/"
          buttonText="Читать"
        />
        <hr className={info.hr} />
        <InfoBlock
          badge="моя книга"
          title="«Измерение Добрых Возможностей»"
          description="Сборник терапевтических сказок (возраст 12+). Физическая и электронная версии."
          link="https://timoshchuk.ru/book?utm_source=yanatimoshchuk.ru&utm_medium=page__info"
          buttonText="Подробнее"
        />
        <hr className={info.hr} />
        <h2 className={info.h2}>Курсы и тренинги</h2>
        <InfoBlock
          badge="для родителей"
          title="Основы воспитания мальчиков"
          link="https://raduga-skazok.ru/2018/03/22/seminar-trening-dlja-roditelej-osnovy-vospitanija-malchikov/"
          buttonText="Подробнее"
        />
        <InfoBlock
          badge="для родителей"
          title="Основы воспитания девочек"
          link="https://raduga-skazok.ru/2018/03/22/seminar-trening-dlja-roditelej-osnovy-vospitanija-devochek/"
          buttonText="Подробнее"
        />
        <InfoBlock
          badge="для воспитателей и педагогов"
          title="Методические разработки тренингов и занятий"
          description="Полные методические разработки в формате PDF с набором необходимых приложений"
          link="https://raduga-skazok.ru/produkty/"
          buttonText="Подробнее"
        />
        <hr className={info.hr} />
        <h2 className={info.h2}>Социальные сети</h2>
        <InfoBlock
          title="группа ВКонтакте"
          description="Заметки сказкотерапевта"
          link="https://vk.com/raduga.skazok"
          buttonText="Открыть"
        />
        <InfoBlock
          title="Telegram-канал"
          description="Заметки сказкотерапевта"
          link="https://t.me/radugaskazok"
          buttonText="Открыть"
        />
      </main>
    </Layout>
  );
}

export default InfoPage;
