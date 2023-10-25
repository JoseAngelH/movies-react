import React, { useState, useEffect } from 'react'
import { get } from '../utils/httpClient';
import MovieCard from './MovieCard'
import styles from './MoviesGrid.module.css'
import Spinner from './Spinner';
import { FaSearch } from 'react-icons/fa'
import { ImSad } from 'react-icons/im'
import Select from 'react-select';
import Estrenos from './Estrenos';

  function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [moviesS, setMoviesS] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // Busqueda Simple
    const [searchText, setSearchText] = useState("");
    // Busqueda Avanzada
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
      setIsLoading(true)
      get("movies").then((data) => {
        setMovies(data);
        setMoviesS(data);
        setIsLoading(false);
      });
    }, []);

    if(isLoading){
      return <Spinner/>
    }

    const handleChange = (e) => {
        if(!Number(e.target.value)){
          setSearchText(e.target.value);
          filtrar(e.target.value);
        }
        else{
          alert('Solo se admiten datos tipo texto');
        }
    }
    
    const filtrar=(textSearch) => {
      var resultSearch = moviesS.filter((element) => {
          if(element.title.toString().toLowerCase().includes(textSearch.toLowerCase())){
            return element;
          }
      })
      setMovies(resultSearch);
    }
    const genres = [
      {label: 'Todos', value: 'All'},
      {label: 'Aventura', value: 'Aventura'},
      {label: 'Accion', value: 'Accion'},
      {label: 'Terror', value: 'Terror'},
      {label: 'Ficcion', value: 'Ficcion'},
      {label: 'Drama', value: 'Drama'},
      {label: 'Suspenso', value: 'Suspenso'},
    ]
    
    const subtitles = [
      {label: 'Todos', value: 'All'},
      {label: 'Si', value: 'yes'},
      {label: 'No', value: 'no'}
    ]


    const handleSelectChange = ({value})  => {
        var resultSearch = moviesS.filter((element) => {
          if(element.genre === value || value === 'All'){
            return element;
          }
        })
        setMovies(resultSearch);
        setResultados(resultSearch);
    }

    const handleSelectChangeSub = ({value})  => {
      if(!resultados.length) {
        var resultSearch = moviesS.filter((element) => {
          if(element.subtitle === value || value === 'All'){
            return element;
          }
        })
        setMovies(resultSearch);
        setResultados(resultSearch);
      }
      else{
        var resultSearch = resultados.filter((element) => {
          if(element.subtitle === value || value === 'All'){
            return element;
          }
        })
        setMovies(resultSearch);
        setResultados([]);
      }
    }

    if(movies.length){
      return (
        <div>
          <div className={styles.containerSearchAll}>
            <div className={styles.divFilter}>
                <div className={styles.filterGen}>
                  <p className={styles.generos}>Generos: </p>
                  <Select className={styles.filtro}
                    options = { genres
                     }
                    onChange = { handleSelectChange }
                    />
                </div>
                <div className={styles.filterSub}>
                  <p className={styles.generos}>Subtitulos: </p>
                  <Select className={styles.filtro}
                    options = { subtitles }
                    onChange = { handleSelectChangeSub }
                    />
                </div>
            </div>
            <div className={styles.searchContainer}>
              <div className={styles.searchBox}>
                  <input type='text' className={styles.searchInput} 
                      placeholder='Buscar Pelicula'
                      value={searchText} 
                      onChange={handleChange}
                  />
                  <button className={styles.searchButton}>
                      <FaSearch size={20}/>
                  </button>
              </div>
            </div>
          </div>
          <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
          <Estrenos/>
        </div>
      );
    }
    else{
      return (
        <div>
          <div className={styles.containerSearchAll}>
            <div className={styles.divFilter}>
                <div className={styles.filterGen}>
                  <p className={styles.generos}>Generos: </p>
                  <Select className={styles.filtro}
                    options = { genres }
                    onChange = { handleSelectChange }
                    />
                </div>
                <div className={styles.filterSub}>
                  <p className={styles.generos}>Subtitulos: </p>
                  <Select className={styles.filtro}
                    options = { subtitles }
                    onChange = { handleSelectChangeSub }
                    />
                </div>
            </div>

            <div className={styles.searchContainer}>
              <div className={styles.searchBox}>
                  <input type='text' className={styles.searchInput} 
                      placeholder='Buscar Pelicula'
                      value={searchText} 
                      onChange={handleChange}
                  />
                  <button className={styles.searchButton}>
                      <FaSearch size={20}/>
                  </button>
              </div>
            </div>
          </div>
          <div className={styles.noResults}>
              No hay elementos que conincidan con el criterio de busqueda... 
              <br />
              <ImSad size={35}/>
          </div>
        </div>
      );
    }
    
}

export default MoviesGrid