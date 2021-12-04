import React,{useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) =>{

    const [movies, setMovies] = useState(
        [
            {
                name: 'harry poter',
                price: '$10',
                id: 12134
            },
            {
                name: 'Avengers',
                price: '$40',
                id: 12454
            },
            {
                name: 'fast and furious',
                price: '$30',
                id: 21564
            }
       ]
    );

    return(
      <div>
          <MovieContext.Provider value={[movies,setMovies]}>
              {props.children}
          </MovieContext.Provider>
    
      </div>
    );
}
