import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'

import cn from 'classnames'
import styles from './Page.module.css'

export function SignupPage() {
  return (
    <section className={styles.signin}>
      <div className={cn(styles.signin__container, 'container', 'grid')}>
        <form className={styles.signin__form}>
          <img className={styles.signin__logo} src={logo} />
          <div className={styles.signin__box}>
            <h1 className={styles.signin__title}>
              Добро пожаловать!
            </h1>
            <p>
              Введите данные, чтобы продолжить
            </p>
          </div>
          <div className={styles.signin__box}>
            <input placeholder="Электронная почта" className={styles.signin__input} />
          </div>
          <div className={styles.signin__box}>
            <input placeholder="Логин" className={styles.signin__input} />
          </div>
          <div className={styles.signin__box}>
            <input placeholder="Пароль" className={styles.signin__input} />
          </div>
          <div className={styles.signin__box}>
            <input placeholder="Повторите пароль" className={styles.signin__input} />
          </div>
          <Link className={styles.signin__btn} to="/profile">
            Зарегистрироваться
          </Link>
          <div className={styles.signin__forgout}>
            <p>
              Есть аккаунт? 
            </p>
            <Link to="/signin" className={styles.signin__link}>
              Войти
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}