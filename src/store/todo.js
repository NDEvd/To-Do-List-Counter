import { makeAutoObservable } from "mobx";

class Todo {
    todos = [{id:1, title:'read', completed: false},
      {id:2, title:'dance', completed: false}
    ]

    constructor() {
      makeAutoObservable(this)
    }

    addTodo(todo) {
      const newId = new Date();
      this.todos.push({id: newId, title: todo, completed: false});
      console.log(this.todos);
    }
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id) {
      this.todos = this.todos.map((todo) => ({
        ...todo, completed: todo.id === id ? !todo.completed : todo.completed
      }));
    }
}

export default new Todo()