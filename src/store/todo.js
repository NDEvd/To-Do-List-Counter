import { makeAutoObservable } from "mobx";

class Todo {
    todos = [{id:1, title:'read', completed: false},
      {id:2, title:'dance', completed: false}
    ]

    constructor() {
      makeAutoObservable(this)
    }

    addTodo(todo) {

      this.todos.push({title: todo, completed: false});
      console.log(this.todos);
      console.log(todo._id);
    }
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id) {
      this.todos = this.todos.map(todo => todo.id !== id ? {...todo, completed: !todo.completed} : todo)
    }

    // changeTodos() {
      
    // }

}

export default new Todo()