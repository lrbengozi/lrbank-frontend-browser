import React from 'react';
import { Header } from '../../Components/Header';

import styles from './styles.module.scss'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.contentBody}>
        <div>
          <h1>Um banco diferente e aberto!</h1>
          <h2>Baixe agora mesmo o nosso APP e abra a sua conta.</h2>
        </div>
        <img src="/mobile.png" alt="Mobile"/>
      </div>
    </div>
  )
}

export default HomePage;