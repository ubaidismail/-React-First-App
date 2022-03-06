import React from 'react';
import {TodoItem} from './Todoitem';

export const Todos = (props) => {
  return <div className='container'>
    <h3 className='text-center'>Todos Lists</h3>
    {props.todos.length === 0? "No todos to display" : 
       props.todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> 
      })
    }
     
     {/* <TodoItem todo={props.todos[0]} />  */}
  </div>;
};
