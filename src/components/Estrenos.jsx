import React, { useState, useEffect } from 'react'
import styles from './MoviesGrid.module.css'

const imagenesArray = ['Avatar',
                    'gatoconbotas',
                    'Mandalorian',
                    'Padrino',
                    'Shrek5',
                    'quantumania',
                    'terrifier',
                    'moonlight',
                    'quito',
                    'reyes'
                        ];

function Estrenos() {
    
    const [nombresCounter, setNombresCounter] = useState(0);
    const [nombresCounterS1, setNombresCounterS1] = useState(imagenesArray.length-1);
    const [nombresCounterS2, setNombresCounterS2] = useState(1);
    useEffect(()=>{
        const interval = setInterval(()=> {
            var actualMovie = 0;
          setNombresCounter((currentValue)=> {
            if(currentValue + 1 === imagenesArray.length){
                actualMovie = 0;
                return 0;
            }
            actualMovie = currentValue + 1;
            return currentValue +1; 
          })

          setNombresCounterS1(()=>{
            if(actualMovie === 0){
                return imagenesArray.length - 1;
            }
            return actualMovie - 1;
          })

          setNombresCounterS2(()=>{
            if(actualMovie + 1 === imagenesArray.length){
                return 0;
            }
            return actualMovie + 1;
          })

        }, 4000);
        return ()=> clearInterval(interval);
      }, []);

  return (
    <div className={styles.carrusel}>
        <h2>Proximamente...</h2>
        <div className={styles.imagenCarrusel}>
            <img 
                className={`${styles.movieImage} ${styles.movieSecond}`} 
                src={require('../assets/carrusel/' + imagenesArray[nombresCounterS1] + '.jpg')} 
                alt={'Estrenos'} />
            <img 
                className={`${styles.movieImage} ${styles.moviePrimary}`} 
                src={require('../assets/carrusel/' + imagenesArray[nombresCounter] + '.jpg')} 
                alt={'Estrenos'} />
            <img 
                className={`${styles.movieImage} ${styles.movieSecond}`} 
                src={require('../assets/carrusel/' + imagenesArray[nombresCounterS2] + '.jpg')} 
                alt={'Estrenos'} />
        </div>
    </div>
  )
}

export default Estrenos