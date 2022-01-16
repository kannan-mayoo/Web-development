import React, {useContext, useState} from 'react';
import {Moviesprovider} from './Moviescontext';

function Addmovie() {

    const[moviename, setmoviename] = useState('')
    const[directorname, setdirectorname] =useState('')
    
    const obj = useContext(Moviesprovider);
    
    
    function add (){
        
        var movie = {
        moviename:moviename,
        directorname: directorname    
        }
        
        obj.addmovie(movie)
    }




    return <div >
        <h1> This is Addmovie component  </h1>
        <input type='text' placeholder = 'moviename' value ={moviename} onChange={(e) => {setmoviename(e.target.value)}} /> <br/>
        <input type='text' placeholder='directorname' value={directorname} onChange={(e) => {setdirectorname(e.target.value)}} /> <br/>

        <button type='Submit' onClick ={add}> Add movie </button>
        </div>


}

export default Addmovie