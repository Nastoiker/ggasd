import cn from 'classnames'
import styles from './Page.module.css'

import {Link} from "react-router-dom"

import { product } from '../../../data/product';
import timer from '../assets/Timer.svg'
import Rectangle from '../assets/Rectangle.png'
import knife from '../assets/ForkKnife.svg'

import grafic from '../assets/grafic.png'
import { PopularProduct } from '../../../components/popularProduct/ui/Page';

export function ProfilePage() {
  return (
    <section className={cn('section', styles.page)}>
      <div className={cn(styles.profile__data_container__data, 'grid', 'container')}>
        <article className={styles.profile__card__user}>
          <img className={styles.profile__card_img} src={Rectangle} />
        </article>
        <div className={styles.profile__data_container_column}>
          <article>
            <h1 style={{fontSize: "3em"}} className={styles.profile__card_title}>
              Имя Фамилия
            </h1>
          </article>
          <article className={styles.profile__card}>
            <p className={styles.profile__card_title}>
              Данные пользователя 
            </p>
          </article>
        </div>
      </div>
      <div className={cn(styles.profile__container, 'container', 'grid')}>
        <div className={styles.profile__data}>
          <h1 style={{fontSize: "3em"}}>
            Ваш результат
          </h1>
          <div className={cn(styles.profile__data_container, 'grid')}>
            <article className={styles.profile__card}>
              <p className={styles.profile__card_title}>
                Исходя из ваших ответов, вы <br />
                будете весить...
              </p>
              <p style={{fontSize: "3em", marginTop: "1rem", marginBottom: "1rem"}} className={styles.profile__card_title}>
                48 кг
              </p>
              <img src={grafic} />
            </article>
            <div className={styles.profile__data_container_column}>
              <article className={styles.profile__card}>
                <h1 style={{fontSize: "3em"}} className={styles.profile__card_title}>
                  Ваш индивидуальный план <br />
                  диеты
                </h1>
                <p className={styles.profile__card_desc}>
                  Точно знайте, что есть на завтрак, <br />
                  обед и ужин!
                </p>
              </article>
              <article className={styles.profile__card}>
                <h1 style={{fontSize: "3em"}} className={styles.profile__card_title}>
                  -3 кг
                </h1>
                <p className={styles.profile__card_title}>
                  после первой недели!
                </p>
              </article>
            </div>
          </div>
        </div>
        <PopularProduct />
      </div>
    </section>
  )
}