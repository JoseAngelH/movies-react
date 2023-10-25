import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { get } from '../utils/httpClient';
import { NavLink } from 'react-router-dom';
import styles from "./Breadcrums.module.css"


function Breadcrums({site}) {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([])

    useEffect(() => {
        get('movies/' + movieId).then(data => {
            setMovie(data);
        })
    }, [movieId])

    if(site == 1){
        return (
            <div className={styles.breadcrumContainer}>
                <NavLink className={styles.crumb} to={'/'}>Home </NavLink>
                <p className={styles.crumb}>{movie.title}</p>
            </div>
          )
    }
    if(site == 2){
        return (
            <div className={styles.breadcrumContainer}>
                <NavLink className={styles.crumbLogin} to={'/'}>Home </NavLink>
            </div>
          )
    }
    if(site == 3){
        return (
            <div className={styles.breadcrumContainer}>
                <NavLink className={styles.crumbLogin} to={'/'}>Home </NavLink>
                <p className={styles.crumbLogin}>{'Login'}</p>
            </div>
          )
    }
}

export default Breadcrums