import React from 'react';
import styles from './Inicio.module.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Login from './Login';
import MoviesGrid from './MoviesGrid'; 
import MovieDetails from './MovieDetails';

 function Inicio() {
   return (
     <Router>
        <main>
          <div className={styles.encabezado}>
            <NavLink to={'/'}>
              <img className={styles.logoImg} src={require('../assets/logo.png')} alt="logo" />
            </NavLink>
            <div className={styles.NavContainer}>
              <NavLink className={styles.login} to={'/login'}>{'Entrar'}</NavLink>
              <NavLink className={styles.register} to={'/'}>{'Registro'}</NavLink>
            </div>
          </div>
        </main>

        <Routes>
            <Route path='/movies/:movieId' element={<MovieDetails/>}/>
            <Route path='/' element={<MoviesGrid/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>

     </Router>
   )
 }
 
 export default Inicio