import React,{useState, useContext} from 'react'
import { MovieContext } from "./MovieContext";
const AddMovies=()=>{

    const [name , setName]= useState('');
    const [price , setPrice]= useState('');
    const [movies, setMovies]= useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }
    const updatePrice = (e) => {
        setPrice(e.target.value);
    }
    const addmovies = e  =>{
        e.preventDefault();
        setMovies(prevMovies =>[...prevMovies , {name: name , price:price}])
    }
    return(
        <form onSubmit={addmovies}>
            <input type="text" name="name" value={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <button>submit</button>
        </form>
    )

}

export default AddMovies;