import React,{useState} from "react";
import data from "./books.json";

function App() {

  const [info, setinfo] = useState();
  function showdata(){
    if(info){
      var abc = data.books.map( (dataSet) => {
        if(dataSet.title.includes(info)){
          return(
            <div>
            <h3>{dataSet.title}</h3>
            <h3>{dataSet.author}</h3>
            </div>
          )
        }
      })
      return(abc)
    }
    return(
     data.books.map( dataSet => (
      <div>
      <h3>{dataSet.title}</h3>
      <h3>{dataSet.author}</h3>
      </div>
    )))
  };

  return (
    <div>
      <input onChange={(e)=> setinfo(e.target.value)} type="text" name="" id="" />
      
      <div>{showdata()}</div>
      <div></div>
      
    </div>
    );
}

export default App;
