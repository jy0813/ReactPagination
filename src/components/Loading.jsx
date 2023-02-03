import React from 'react';
import styles from '../components/Loading.module.css'

function Loading(props) {
  return (
    <div className={styles['loading-wrap']}>
      <div className={styles['loading-spinner']}></div>
    </div>
  );
}

export default Loading;