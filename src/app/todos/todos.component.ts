import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
public todos;
public text;
public appState = 'default';
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
addTodo() {
    this.todos.push({
      text: this.text,
    });
    localStorage.setItem(this.todos, JSON.stringify(this.text));
}
deleteTodo(todoText) {
    for ( let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text === todoText) {
      this.todos.splice(i, 1);
      }
    }
}
editTodo(todo) {
    this.appState = 'edit';
    this.text = todo.text;
}
}
