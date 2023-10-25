import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { get } from '../utils/httpClient';
import styles from "./MovieDetails.module.css"
import Spinner from './Spinner';
import Breadcrums from './Breadcrums';
import Error500 from './Error500';

function MovieDetails() {

    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try{
                setIsLoading(true);
                const response = await get('movies/' + movieId);
                setMovie(response);
                setIsLoading(false);
                setError(false)
            }catch(error){
                setIsLoading(false)
                setError(true);
            }
        })();
    }, [movieId])

    if(isLoading){
        return <Spinner/>
    }

    if(error){
        return <Error500/>
    }

    const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <div>
            <Breadcrums site={1}/>
            <div className={styles.detailsContainer}>
                <img 
                    className={`${styles.col} 
                    ${styles.movieImage}`} 
                    src={imagenUrl} 
                    alt={movie.title} />
                <div className={`${styles.col} ${styles.movieDetails}`}>
                    <p className={movie.firstItem}> <strong> Title: </strong> {movie.title} </p>
                    <p> <strong> Decription: </strong> {movie.overview}  </p>
                    <p><strong>Genre: </strong> {movie.genre} <strong>   Subtitle: </strong> {movie.subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails