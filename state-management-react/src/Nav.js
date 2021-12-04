import React,{useContext} from 'react';
import {MovieContext} from './MovieContext';


const Nav = () => {

    const [movies, setMovies]= useContext(MovieContext);
 
    return(
      <div>
        <h3>Aniket</h3>
        <p>list of movies: {movies.length}</p>
      </div>
    );
}

export default Nav;