import { Link } from "react-router-dom";

import homeImg from '../assets/homeImage.png'

import meat from '../assets/meat.svg'
import fish from '../assets/bottle.svg'
import flowwer from '../assets/cauliflower.svg'
import grain from '../assets/grain.svg'

import lime1 from '../assets/lime1.png'
import lime2 from '../assets/lime2.svg'

import post1 from '../assets/post__img-1.png'
import post2 from '../assets/post__img-2.png'

import adver1 from '../assets/advert_1.png'
import advert2 from '../assets/advert_2.png'

import home__img_bg_1 from '../assets/home__img_bg_1.png'
import home__img_bg_2 from '../assets/home__img_bg_2.png'

import cn from 'classnames'
import styles from './Page.module.css'

export function HomePage() {
  return (
    <>
      <section className={cn(styles.home, 'section')}>
        <div className={cn(styles.home__container, "container", "grid")}>
          <img className={styles.home__img} src={homeImg} />
          <div className={styles.home__data}>
          <img className={styles.home__img_bg_2} src={home__img_bg_2} />
            <h1 className={styles.home__title}>
              Добро пожаловать<br/>
              к здоровой жизни!
              <img className={styles.home__img_bg_1} src={home__img_bg_1} />              
            </h1>
            <p className={styles.home__desc}>
              Ответьте на 10 вопросов и получите персональный<br/>
              дневник питания
            </p>
            <div className={styles.home__btns}>
              <Link to="/test" className={styles.home__link}>
                Женский дневник
              </Link>
              <Link to="/test" className={styles.home__link}>
                Мужской дневник
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={cn('section', styles.listFlavors)}>
        <div className={cn(styles.listFlavors__container, 'container', 'grid')}>
          <img className={styles.listFlavors__container_img_1} src={lime1} />
          <figure>1</figure>
          <article className={styles.listFlavors__card}>
            <h1 className={styles.listFlavors__card_title}>
              Искушение вкусов
            </h1>
            <p>
              В нашем арсенале разнообразие <br />
              рецептов для самых искушенных <br />
              гурманов.
            </p>
          </article>
          <article className={styles.listFlavors__card}>
            <h1 className={styles.listFlavors__card_title}>
              Простота приготовления
            </h1>
            <p>
              Даже самый неопытный кулинар <br />
              сможет с легкостью приготовить <br />
              наши блюда. 
            </p>
          </article>
          <article className={styles.listFlavors__card}>
            <h1 className={styles.listFlavors__card_title}>
              Удобство использования
            </h1>
            <p>
              Избавьтесь от необходимости <br />
              считать калории. Наш дневник <br />
              питания сделает всю работу за вас.
            </p>
          </article>
          <article className={styles.listFlavors__card}>
            <h1 className={styles.listFlavors__card_title}>
              Отслеживайте результат
            </h1>
            <p>
              Следя за своими показателями на <br />
              постоянной основе, вы будете <br />
              всегда в курсе всех изменений.
            </p>
          </article>
          <img className={styles.listFlavors__container_img_2} src={lime2} />
        </div>
      </section>

      <section className={cn('section', styles.about)}>
        <div className={cn('container', 'grid')}>
          <h1 className={styles.about__title}>
            Рецепты из доступных продуктов
          </h1>
          <div className={cn(styles.about__container, 'grid')}>
            <article className={styles.about__card}>
              <img src={meat} />
              <p>
                Мясо
              </p>
            </article>
            <article className={styles.about__card}>
              <img src={fish} />
              <p>
                Кисломолочниые <br />
                продукты
              </p>
            </article>
            <article className={styles.about__card}>
              <img src={flowwer} />
              <p>
                фрукты <br />
                и овощи
              </p>
            </article>
            <article className={styles.about__card}>
              <img src={grain} />
              <p>
                Злаки
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={cn('section', 'post')}>
        <div className={cn(styles.post__container, 'container', 'grid')}>
          <h1 className={styles.post__title}>
            Полезные статьи
          </h1>
          <div className={styles.post__data}>
            <article className={styles.post__card}>
              <h1 className={styles.post__card_title}>
                Вредно ли есть на ночь?
              </h1>
              <p className={styles.post__card_desc}>
                Ночной сон нужен не столько для физического отдыха, сколько <br />
                для восстановления внутренних ресурсов. Когда человек засыпает, <br />
                расслабляются мышцы, снижается частота <br />
                сердечных сокращений, ослабевают внешние реакции. <br />
                На фоне этого активизируются обменные и гормональные процессы.
              </p>
            </article>
            <img src={post1} />
          </div>
          
          <div className={styles.post__data}>
            <img src={post2} />
            <article className={styles.post__card}>
              <h1 className={styles.post__card_title}>
                Вредно ли есть на ночь?
              </h1>
              <p className={styles.post__card_desc}>
                Ночной сон нужен не столько для физического отдыха, сколько <br />
                для восстановления внутренних ресурсов. Когда человек засыпает, <br />
                расслабляются мышцы, снижается частота <br />
                сердечных сокращений, ослабевают внешние реакции. <br />
                На фоне этого активизируются обменные и гормональные процессы.
              </p>
            </article>            
          </div>
        </div>
      </section>

      <section className={cn('section', styles.advert)}>
        <div className={cn(styles.adver__container, 'container', 'grid')}>
          <h1 className={styles.advert__title}>
            Оставайтесь в курсе
          </h1>
          <p className={styles.advert__desc}>
            Подпишитесь на нашу рассылку для получения новых <br />
            сообщений и советов от блога. Давайте оставаться <br />
            в курсе событий!
          </p>
          <div className={styles.advert__btns}>
            <input className={styles.advert__input} placeholder="Электронная почта" />
            <Link to="/signup" className={styles.advert__link}>
              Регистрация
            </Link>
          </div>
          <img className={styles.advert__img_1} src={adver1} />
          <img className={styles.advert__img_2} src={advert2} />
        </div>
      </section>
    </>
  )
}