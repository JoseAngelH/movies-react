import React from 'react'
import Breadcrums from './Breadcrums';
import styles from './Error500.module.css';

function Download() {

  return (
    <div>
      <Breadcrums site={2}/>
      <div className={styles.divWarning}>
          <img 
              className={styles.warningImg}
              src={require('../assets/error-500.jpg')} alt="Error Page" /> 
      </div>
      <p className={styles.message}>OOOOPS!!  Parece que el archivo que solicitas no se encuentra disponible.</p>
    </div>
  )
}

export default Download