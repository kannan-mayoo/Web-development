import React, {useContext} from 'react';
import {Moviesprovider} from './Moviescontext';

function Movieslist() {


    
    const obj = useContext(Moviesprovider);

    return <div style ={{backgroundColor: 'green'}}>
         
        <h1 style ={{borderBottom:'3px solid red', paddingBottom:'15px'}}> This is Movieslist component  </h1>
        {obj.movies.map((movie) => {
            return <div> 
                <h1> {movie.moviename} </h1>
                <p style ={{borderBottom:'7px solid black', paddingBottom:'25px'}}>Directed by {movie.directorname} </p>
            </div>
        })}
        </div>

}

export default Movieslist