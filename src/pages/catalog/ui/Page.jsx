import { product } from "../../../data/product";
import timer from '../assets/Timer.svg'
import knife from '../assets/ForkKnife.svg'
import banner from '../assets/banner.svg'
import arrow1 from '../assets/arrow1.svg'
import arrow2 from '../assets/arrow2.svg'
import heart from '../assets/Heart.png'
import cn from 'classnames'
import styles from './Page.module.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export function CatalogPage() {
  const [popularStartIndex, setPopularStartIndex] = useState(0);
  const [weightStartIndex, setWeightStartIndex] = useState(0);
  const [weightGainStartIndex, setWeightGainStartIndex] = useState(0);

  const [likedItems, setLikedItems] = useState({});

  const popularProducts = product.slice(0, 6);
  const weighProducts = product.slice(6, 12);
  const setwighProducts = product.slice(12, 18);

  const slideLength = 4;

  const handleNextSlide = (setStartIndex, length) => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (length - slideLength + 1));
  };

  const handlePrevSlide = (setStartIndex, length) => {
    setStartIndex((prevIndex) => (prevIndex - 1 + (length - slideLength + 1)) % (length - slideLength + 1));
  };

  const toggleLike = (id) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [id]: !prevLikedItems[id]
    }));
  };

  const renderProductCard = (item) => (
    <Link to={`/recept/${item.id}`} key={item.id}>
      <article className={styles.catalog__card}>
        <div 
          className={cn(styles.catalog__card_likes, { 
            [styles.catalog__card_likes_active]: likedItems[item.id] 
          })}
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation on heart click
            toggleLike(item.id);
          }}
        >
          <img src={heart} alt="heart" />
        </div>
        <img 
          className={styles.catalog__card_img} 
          src={item.productImg} 
          alt={item.title} 
        />
        <h1 className={styles.catalog__card_title}>{item.title}</h1>
        <div className={styles.catalog__card_stats}>
          <p className={styles.catalog__card_stats__desc}>
            <img src={timer} alt="timer" />
            {item.time}
          </p>
          <p className={styles.catalog__card_stats__desc}>
            <img src={knife} alt="knife" />
            {item.kalor}
          </p>
        </div>
      </article>
    </Link>
  );

  return (
    <section className={cn(styles.catalog, 'section')}>
      <div className={cn(styles.catalog__container, 'container', 'grid')}>
        <div className={cn(styles.catalog__banner, 'section')}>
          <img className={styles.banner} src={banner} alt="banner" />
        </div>

        <div className={cn(styles.catalog__popular)}>
          <div className={styles.catalog__popular_header}>
            <h1 className={styles.catalog__title}>Популярные рецепты</h1>
            <div className={styles.catalog__slide}>
              <img onClick={() => handlePrevSlide(setPopularStartIndex, popularProducts.length)} src={arrow1} alt="prev" />
              <img onClick={() => handleNextSlide(setPopularStartIndex, popularProducts.length)} src={arrow2} alt="next" />
            </div>
          </div>
          <div className={styles.catalog__popular_list}>
            {popularProducts.slice(popularStartIndex, popularStartIndex + slideLength).map(renderProductCard)}
          </div>
        </div>

        <div className={cn(styles.catalog__popular)}>
          <div className={styles.catalog__popular_header}>
            <h1 className={styles.catalog__title}>Рецепты для похудения</h1>
            <div className={styles.catalog__slide}>
              <img onClick={() => handlePrevSlide(setWeightStartIndex, weighProducts.length)} src={arrow1} alt="prev" />
              <img onClick={() => handleNextSlide(setWeightStartIndex, weighProducts.length)} src={arrow2} alt="next" />
            </div>
          </div>
          <div className={styles.catalog__popular_list}>
            {weighProducts.slice(weightStartIndex, weightStartIndex + slideLength).map(renderProductCard)}
          </div>
        </div>

        <div className={cn(styles.catalog__popular)}>
          <div className={styles.catalog__popular_header}>
            <h1 className={styles.catalog__title}>Рецепты для набора веса</h1>
            <div className={styles.catalog__slide}>
              <img onClick={() => handlePrevSlide(setWeightGainStartIndex, setwighProducts.length)} src={arrow1} alt="prev" />
              <img onClick={() => handleNextSlide(setWeightGainStartIndex, setwighProducts.length)} src={arrow2} alt="next" />
            </div>
          </div>
          <div className={styles.catalog__popular_list}>
            {setwighProducts.slice(weightGainStartIndex, weightGainStartIndex + slideLength).map(renderProductCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
