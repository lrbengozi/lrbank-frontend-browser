import React from 'react';
import { Header } from '../../Components/Header';

import styles from './styles.module.scss'

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
      </main>
    </div>
  )
}

export default HomePage;