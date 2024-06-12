import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'

import cn from 'classnames'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={cn(styles.nav, "container")}>
        <img className={styles.header__logo} src={logo} />
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link to="/" className={styles.nav__link}>
              Главная
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/catalog" className={styles.nav__link}>
              Рецепты
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/signin" className={styles.nav__link}>
              Войти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}