import './App.css';
import HEADER from './MyComponents/header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {Addtodo} from './MyComponents/Addtodo';
import React, { useState } from 'react';
function App() {
  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e)=>{
        return e!==todo;
      
    }));
  }
  const [todos, setTodos] = useState([
    {
        sno: 1, 
        title: "Go to the market",
        desc: "You need bla bla bla",
    },
    {
      sno: 2,
      title: "Go to the shop",
      Desc: "You need bla bla bla",
  },
  {
    sno: 3,
    title: "Go to the office",
    Desc: "You need bla bla bla",
}
  ]);
  return (
    <>
      <HEADER title="My Todo's List" searchBar={false} />
      <Addtodo></Addtodo>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
