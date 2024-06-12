import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Page.module.css';

import woman from './assets/woman.png';

import icon1 from './icons/question1.svg';
import icon2 from './icons/question2.svg';
import icon3 from './icons/question3.svg';
import icon4 from './icons/question4.svg';
import icon5 from './icons/question5.svg';
import icon6 from './icons/question6.svg';
import icon7 from './icons/question7.svg';
import icon8 from './icons/question8.svg';
import icon9 from './icons/question9.svg';
import icon10 from './icons/question10.svg';
import icon11 from './icons/question11.svg';
import icon12 from './icons/question12.svg';
import icon13 from './icons/question13.svg';
import icon14 from './icons/question14.svg';
import icon15 from './icons/question15.svg';
import icon16 from './icons/question16.svg';
import icon17 from './icons/question17.svg';
import icon18 from './icons/question18.svg';
import icon19 from './icons/question19.svg';
import icon20 from './icons/question20.svg';
import icon21 from './icons/question21.svg';
import icon22 from './icons/question22.svg';
import icon23 from './icons/question23.svg';
import icon24 from './icons/question24.svg';
import icon25 from './icons/question25.svg';
import icon26 from './icons/question26.svg';
import icon27 from './icons/question27.svg';
import icon28 from './icons/question28.svg';
import icon29 from './icons/question29.svg';
import icon30 from './icons/question30.svg';
import icon31 from './icons/question31.svg';
import icon32 from './icons/question32.svg';
import icon33 from './icons/question33.svg';
import icon34 from './icons/question34.svg';
import icon35 from './icons/question35.svg';

export function TestPage() {
  const questions = [
    {
      id: 1,
      text: "Укажите уровень своей физической активности",
      answers: [
        { id: 1, title: "Минимальная физическая активность", icon: icon1 },
        { id: 2, title: "Много хожу пешком", icon: icon2 },
        { id: 3, title: "Занимаюсь спортом 1-2 раза в неделю", icon: icon3 },
        { id: 4, title: "Занимаюсь спортом 3-4 раза в неделю", icon: icon4 },
        { id: 5, title: "Занимаюсь спортом +5 раз в неделю", icon: icon5 },
      ]
    },
    {
      id: 2,
      text: "Ваша цель?",
      answers: [
        { id: 6, title: "Похудеть", icon: icon6 },
        { id: 7, title: "Набрать вес", icon: icon7 },
        { id: 8, title: "Поддерживать вес", icon: icon8 },
        { id: 9, title: "Перейти на правильное питание", icon: icon9 },
      ]
    },
    {
      id: 3,
      text: "Сколько раз в день вы едите?",
      answers: [
        { id: 10, title: "2 раза", icon: icon10 },
        { id: 11, title: "3 раза", icon: icon11 },
        { id: 12, title: "4 раза", icon: icon12 },
        { id: 13, title: "5 раза", icon: icon13 },
      ]
    },
    {
      id: 4,
      text: "Сколько времени у вас есть на готовку?",
      answers: [
        { id: 14, title: "Достаточно для любого рецепта", icon: icon14 },
        { id: 15, title: "Разное", icon: icon15 },
        { id: 16, title: "Нет времени", icon: icon16 },
      ]
    },
    {
      id: 5,
      text: "Сколько воды обычно вы пьете в течение дня?",
      answers: [
        { id: 17, title: "1-4 стаканов", icon: icon17 },
        { id: 18, title: "5-10 стаканов", icon: icon18 },
        { id: 19, title: "Больше 10", icon: icon19 },
        { id: 20, title: "Только чай или кофе", icon: icon20 },
      ]
    },
    {
      id: 6,
      text: "Ваши вредные привычки",
      answers: [
        { id: 21, title: "Ем поздно ночью", icon: icon21 },
        { id: 22, title: "Плохо сплю", icon: icon22 },
        { id: 23, title: "Употребляю много сладкого", icon: icon23 },
        { id: 24, title: "Выпиваю", icon: icon24 },
        { id: 25, title: "Ничего из перечисленного ", icon: icon25 },
      ]
    },
    {
      id: 7,
      text: "Какие рецепты вы предпочитаете?",
      answers: [
        { id: 26, title: "Быстрые", icon: icon26 },
        { id: 27, title: "Простые", icon: icon27 },
        { id: 28, title: "Доступные", icon: icon28 },
        { id: 29, title: "Для всей семьи", icon: icon29 },
        { id: 30, title: "Разные", icon: icon30 },
      ]
    },
    {
      id: 8,
      text: "Ваш типичный день",
      answers: [
        { id: 31, title: "В офисе", icon: icon31 },
        { id: 32, title: "В офисе, но часто выхожу", icon: icon32 },
        { id: 33, title: "Много времени на ногах", icon: icon33 },
        { id: 34, title: "Ручной труд", icon: icon34 },
        { id: 35, title: "Большую часть дня провожу дома", icon: icon35 },
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswerClick = (answerId) => {
    setAnswers([...answers, { questionId: questions[currentQuestion].id, answerId }]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      console.log('Test completed', answers);
      setCurrentQuestion(questions.length); // Для отображения формы обратной связи
    }
  };

  const renderFeedbackForm = () => (
    <form className={styles.form}>
      <h1 className={styles.form__title}>
        Ваши параметры
      </h1>
      <div className={styles.form__inputs}>
        <input className={styles.form__input} required placeholder='Возраст' />
        <input className={styles.form__input} required placeholder='Рост' />
        <input className={styles.form__input} required placeholder='Вес' />
        <input className={styles.form__input} required placeholder='Желанный вес' />
        <Link className={styles.form__link} to="/profile">
          Продолжить
        </Link>
      </div>
    </form>
  );

  return (
    <section className={cn(styles.test, 'section')}>
      <div className={cn(styles.test__container, 'container', 'grid')}>
        <div className={styles.test__data}>
          {currentQuestion < questions.length ? (
            <div className={styles.test__data_content} key={questions[currentQuestion].id}>
              <h1>{questions[currentQuestion].text}</h1>
              {questions[currentQuestion].answers.map((answer) => (
                <article className={styles.test__data_content__card} key={answer.id} onClick={() => handleAnswerClick(answer.id)}>
                  <div className={styles.test__data_content__card_imgs}>
                    <img src={answer.icon} alt={answer.title} />
                    <p>{answer.title}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            renderFeedbackForm()
          )}
        </div>
        <img src={woman} alt="Woman" />
      </div>
    </section>
  );
}
