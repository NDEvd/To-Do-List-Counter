import React, { useState } from "react";
import { observer } from "mobx-react-lite";
// import './App.css';
import './Todo.css'
import bin from '../image/delete.svg';
import todo from "../store/todo.js";

const Todo = observer(() => {
  const [newTodo, setNewTodo] = useState('');
  return (
    <div className="todo">
    <h1 className="todo__title">To do list</h1>
      <form action="" onSubmit={(e) => {
        e.preventDefault();
        todo.addTodo(newTodo);
        setNewTodo('');
        }}>
        <input className="todo__input" type="text" value={newTodo} minLength='2' onChange={(e) => setNewTodo(e.target.value)}/>
        <button className="todo__button-add" >Add</button>
      </form>
      <div>
        {todo.todos.map(item =>
          <div key={item.id} className="todo__item">
            <div>
              <input className="todo__checkbox" type="checkbox" id="check" checked={item.completed} onChange={() => todo.completeTodo(item.id)} />
              <label className="todo__label" htmlFor="check">{item.title}</label> 
            </div>
            <button className="todo__remove" src={bin} onClick={() => todo.removeTodo(item.id)}></button>
          </div>
        )}
      </div>
      </div>
  )
})

export default Todo