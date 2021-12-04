
import React, {createContext, useEffect, useState} from 'react';
import Loading from '../src/components/Loading';

export const  NewsContext = createContext(); 

export const NewsProvider = (props) => {
    
    const [trendingNews,setTrendingNews] = useState(undefined);
    

    
    useEffect( () => {
     getNews();
      },[]);
    

    const API_KEY = "257f789b03134e6190ecd134b9fa6ebb";
   
    const getNews = async() => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
        const data = await response.json();
        setTrendingNews(data.articles);
        console.log(data.articles);
      };
    
    if (!trendingNews) return (
        <Loading />
    );


    return (
        <NewsContext.Provider value={[trendingNews,setTrendingNews]}>
            {props.children}
        </NewsContext.Provider>
    );

}

