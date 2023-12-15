import { observer } from "mobx-react-lite";
import { useState } from "react";
import './Todo.css';
import todo from "../store/todo.js";
import help from "../image/HelpHover.svg";

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
            <div className="todo__label-check">
              <input className="todo__checkbox" type="checkbox" id={item.id} name="scales" />
              <label className="todo__label" htmlFor={item.id}>{item.title}</label>
            </div>                
            <button className="todo__remove" src={help} onClick={() => todo.removeTodo(item.id)}></button>
          </div>
        )}
      </div>
      </div>
  )
})

export default Todo