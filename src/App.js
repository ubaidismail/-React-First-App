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
   const addTodo = (title , desc)=>{
    console.log('checking', title, desc);
    let sno;
    if(todos.length == 0){
      sno = 0;
    }else{
      
      sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos ,myTodo]);
    console.log(myTodo);
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
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
