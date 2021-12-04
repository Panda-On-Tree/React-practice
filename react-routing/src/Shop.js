import React,{ useState, useEffect} from 'react';

import './App.css';

function Shop() {

    useEffect( () => {
        fetchItems();
    },[]) ;

    const [items, setItems] = useState([]);


    const fetchItems = async ()=> {
        const apidata = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');
        const items = await apidata.json();
        console.log(items);
        setItems(items);
    }

  return (
    <div>
        {/* {items.map(item => (
            <h1>{items.name}</h1>
        ))} */}
    </div>
  );
}

export default Shop;
