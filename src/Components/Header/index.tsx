import { FaPiggyBank } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi'

import styles from './styles.module.scss';
import React from 'react';

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div >
        <FaPiggyBank className={styles.iconLogo} />
      </div>
      <div className={styles.buttons}>
        <button type="button" value='Login'>
          <p>
            Login
          </p>
          <p>
            <BiLogIn />
          </p>
        </button>
      </div>
    </header>
  );
}