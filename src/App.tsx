import { useState } from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.Maindiv}>
      <header>
        <h1>Моё резюме</h1>
        <img src="logo.png" alt="Логотип резюме"></img>
        <nav id="menu">
          <ul>
            <li>
              <a href="#">Личные данные</a>
            </li>
            <li>
              <a href="#">Краткое описание</a>
            </li>
            <li>
              <a href="#">Опыт работы</a>
            </li>
            <li>
              <a href="#">Образование</a>
            </li>
            <li>
              <a href="#">Навыки</a>
            </li>
            <li>
              <a href="#">Дополнительная информация</a>
            </li>
          </ul>
        </nav>
      </header>

      <div>
        <section>
          <h2>Личные данные</h2>
          <ul>
            <li>Имя: Дмитрий</li>
            <li>Контактный номер: 8(934)-234-45-23</li>
            <li> Электронная почта: dmitry@gmail.com</li>
            <li>
              Ссылка на профиль LinkedIn: <a href="#">Перейти в профиль</a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Краткое описание</h2>

          <p>
            Опытный веб-разработчик с 5+ летним стажем, специализирующийся на
            создании современных и<br></br>
            адаптивных веб-приложений. Умею работать в команде и самостоятельно,
            стремясь к постоянному<br></br>
            профессиональному росту и освоению новых технологий. Цель - внести
            свой вклад в разработку<br></br>
            инновационных и эффективных решений.
          </p>
        </section>

        <section>
          <h2>Опыт работы</h2>
          <strong>Последнее место работы:</strong>
          <p>
            Название компании: Нетология<br></br>
            Должность: веб-разработчик<br></br>
            Период работы: Январь 2020 - Настоящее время<br></br>
          </p>

          <strong>Краткое описание обязанностей и достижений:</strong>

          <ul>
            <li>Pазработка и поддержка веб-приложений на React и Node.js.</li>
            <li>Управление командой из 3 разработчиков.</li>
            <li>
              Улучшил производительность веб-приложения на 20% за счет
              оптимизации кода.
            </li>
            <li>
              Внедрил новые технологии и инструменты для автоматизации процессов
              разработки.
            </li>
          </ul>

          <p>
            <strong>Ключевые навыки, использованные на этой должности:</strong>
            React, Node.js, JavaScript, Git, Agile, Team Leadership
          </p>

          <strong>Предыдущее место работы:</strong>

          <p>
            Название компании: Яндекс<br></br>
            Должность: веб-дизайнер<br></br>
            Период работы: Январь 2018 - Декабрь 2020<br></br>
          </p>

          <strong>Краткое описание обязанностей и достижений:</strong>

          <ul>
            <li>Разработка веб-сайтов на HTML, CSS, JavaScript и PHP.</li>
            <li>
              Участие в разработке новых функций и улучшении существующего
              функционала.
            </li>
            <li>
              Успешно реализовал несколько крупных проектов в срок и в рамках
              бюджета.
            </li>
          </ul>

          <p>
            <strong>Ключевые навыки, использованные на этой должности:</strong>
            HTML, CSS, JavaScript, PHP, MySQL, Git
          </p>
        </section>

        <section>
          <h2>Образование</h2>

          <p>
            Название учебного заведения: Московский государственный университет
            им. М.В. Ломоносова<br></br>
            Степень/Квалификация: Магистр<br></br>
            Специальность: Информатика и вычислительная техника<br></br>
            Год окончания: 2018<br></br>
            GPA: 4.8
          </p>
        </section>

        <section>
          <h2>Навыки</h2>
          <p>
            Языки программирования: JavaScript (ES6+), TypeScript, HTML, CSS,
            PHP, Python (базовый)<br></br>
            Фреймворки и библиотеки: React, Node.js, Express, Redux, jQuery,
            Bootstrap<br></br>
            Базы данных: MySQL, PostgreSQL, MongoDB (базовый)<br></br>
            Инструменты: Git, Docker, Webpack, Babel, Jest, ESLint<br></br>
            Методологии разработки: Agile, Scrum<br></br>
            Коммуникативные навыки: Работа в команде, Управление проектами,
            Коммуникация с заказчиком<br></br>
            Языки: Русский (родной), Английский (свободное владение)
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
