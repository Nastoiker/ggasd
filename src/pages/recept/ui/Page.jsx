import cn from 'classnames'
import styles from './Page.module.css'

import { useParams } from 'react-router-dom'
import { product } from '../../../data/product'

export function ReceptPage() {
  const { id } = useParams()
  const productOne = product.find((item) => +item.id === +id)

  if (!productOne) {
    return <div>Product not found</div>
  }

  return (
    <>
      <section className={cn(styles.recept, 'section')}>
        <div className={cn('container', 'grid')}>
          <div className={cn(styles.recept__container, 'grid')}>
            <img className={styles.recept__img} src={productOne.productImg} alt={productOne.title} />
            <div className={styles.recept__data}>
              <h1 className={styles.recept__title}>
                {productOne.title}
              </h1>
              <div className={styles.recept__data_details}>
                <p className={styles.recept__desc}>
                  Порция: {productOne.porcia}
                </p>
                <p>
                  Время приготовления: {productOne.time}
                </p>
              </div>
              <div className={styles.recept__about}>
                <h1 className={styles.recept__about_title}>
                  ИНГРЕДИЕНТЫ
                </h1>
                <ul className={styles.recept__list}>
                  {productOne.guide.map((ingredient, index) => (
                    <div key={index} className={styles.recept__list_content}>
                      {Object.entries(ingredient).map(([name, amount]) => (
                        <div key={name} className={styles.ingredient_pair}>
                          <p className={styles.ingredient_name}>
                            {name}
                          </p>
                          <p className={styles.ingredient_amount}>
                            {amount}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cn(styles.recept__stats, 'section')}>
        <div className={cn(styles.recept__stats_container, 'container')}>
          <article className={styles.recept__stats_card}>
            <p className={styles.recept__stats_card__desc}>
              КАЛОРИЙНОСТЬ
            </p>
            <h1 className={styles.recept__stats_card__title}>
              {productOne.kalor}
            </h1>
            <p className={styles.recept__stats_card__desc}>
              ККАЛ
            </p>
          </article>
          <article className={styles.recept__stats_card}>
            <p className={styles.recept__stats_card__desc}>
              БЕЛКИ
            </p>
            <h1 className={styles.recept__stats_card__title}>
              {productOne.belki}
            </h1>
            <p className={styles.recept__stats_card__desc}>
              ГРАММ
            </p>
          </article>
          <article className={styles.recept__stats_card}>
            <p className={styles.recept__stats_card__desc}>
              ЖИРЫ
            </p>
            <h1 className={styles.recept__stats_card__title}>
              {productOne.jir}
            </h1>
            <p className={styles.recept__stats_card__desc}>
              ГРАММ
            </p>
          </article>
          <article className={styles.recept__stats_card}>
            <p className={styles.recept__stats_card__desc}>
              УГЛЕВОДЫ
            </p>
            <h1 className={styles.recept__stats_card__title}>
              {productOne.yglevodi}
            </h1>
            <p className={styles.recept__stats_card__desc}>
              ГРАММ
            </p>
          </article>
        </div>
      </section>

      <section className={cn(styles.recept__guide, 'section')}>
        <div className={cn(styles.recept__guide_container, 'container', 'grid')}>
          <h1 className={styles.recept__guide_title}>
            ПОШАГОВАЯ ИНСТРУКЦИЯ
          </h1>
          <ul className={styles.recept__guide_list}>
            {productOne.fullGuide.map((steps, index) => (
              <div key={index}>
                {Object.values(steps).map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
