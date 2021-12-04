import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {



  const [inputText, setTextInput]= useState("");
  const [todos, setTodos]= useState([]);
  const [status , setStatus]= useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // use ffet

  useEffect(() =>{
    getLocalTodos();
  }, []);


  useEffect(() =>{
    filterhandler();
    saveLocalTodos();
  }, [todos,status]);

  // funtion
  const filterhandler = () =>{
      switch(status){
        case "completed" :
          setFilteredTodos(todos.filter((todo)=> todo.completed === true));
          break;
        case "uncompleted" :
          setFilteredTodos(todos.filter((todo)=> todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
  }
// save to local storge
   const saveLocalTodos = () =>{
     localStorage.setItem("todos" , JSON.stringify([todos]));
 };
   
 const getLocalTodos = () =>{
     if (localStorage.getItem("todos") === null)
  {
      localStorage.setItem("todos" , JSON.stringify([]));
  }
    else
    {
     let localTodo = JSON.parse(localStorage.getItem("todos"));
     setTodos(localTodo);
    }
   };




  return (
    <div className="App">
      <header>
        <h1>My Todos List</h1>
      </header>
      <Form inputText={inputText} setTextInput={setTextInput} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList   filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
