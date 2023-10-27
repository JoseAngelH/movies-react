import React from 'react'
import styles from './ErrorPage.module.css'

function ErrorPage() {
  return (
        <div className={styles.divError}>
            <img 
            className={styles.errorImg}
                src={require('../assets/Error404.png')} alt="Error Page" /> 
        </div>
    
  )
}

export default ErrorPage