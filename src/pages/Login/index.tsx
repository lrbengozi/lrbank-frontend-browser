import React from 'react';

import styles from './styles.module.scss'

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginForm}>
          <input type="email" />
          <label htmlFor="email">
            E-mail
          </label>
        </div>
        <div className={styles.loginForm}>
          <input type="password" />
          <label htmlFor="password">
            Senha
          </label>
        </div>
        <div className={styles.buttons}>
          <button type="button" value='Login'>
            <p>
              Login
          </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;