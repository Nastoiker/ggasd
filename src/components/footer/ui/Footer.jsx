import { Link } from 'react-router-dom'

import cn from "classnames"
import styles from './Footer.module.css'

import logo from '../assets/logo.svg'

export function Footer() {
  return (
    <footer className={cn(styles.footer, 'section')}>
      <hr />
      <nav className={cn(styles.footer__nav, 'container')}>
        <img className={styles.footer__logo} src={logo} />
        <ul className={styles.footer__list}>
          <li className={styles.footer__item}>
            <Link to="/catalog" className={styles.footer__link}>
              Услуги
            </Link>
          </li>
          <li className={styles.footer__item}>
            <Link to="/" className={styles.footer__link}>
              О нас
            </Link>
          </li>
          <li className={styles.footer__item}>
            <Link to="/" className={styles.footer__link}>
              Наши партнеры 
            </Link>
          </li>
          <li className={styles.footer__item}>
            <Link to="/" className={styles.footer__link}>
              Связаться с нами 
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}