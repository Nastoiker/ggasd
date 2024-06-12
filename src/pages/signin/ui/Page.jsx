import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'

import cn from 'classnames'
import styles from './Page.module.css'

export function SigninPage() {
  return (
    <section className={styles.signin}>
      <div className={cn(styles.signin__container, 'container', 'grid')}>
        <form className={styles.signin__form}>
          <img className={styles.signin__logo} src={logo} />
          <div className={styles.signin__box}>
            <h1 className={styles.signin__title}>
              Мы скучали!
            </h1>
            <p>
              Войдите, чтобы продолжить
            </p>
          </div>
          <div className={styles.signin__box}>
            <input placeholder="Электронная почта" className={styles.signin__input} />
          </div>
          <div className={styles.signin__box}>
            <input placeholder="Пароль" className={styles.signin__input} />
          </div>
          <Link className={styles.signin__btn} to="/profile">
            Войти
          </Link>
          <div className={styles.signin__forgout}>
            <p>
              Нет аккаунта?
            </p>
            <Link to="/signup" className={styles.signin__link}>
              зарегистрируйся
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}