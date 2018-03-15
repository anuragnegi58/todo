import { Injectable } from '@angular/core';
import { InitTodos } from './init-todos';

@Injectable()
export class TodoService extends InitTodos {
  constructor() {
    super();
    console.log('Service is up and running');
  this.load();
  }
  getTodos() {
    const todos = JSON.parse(localStorage.getItem('todos'))
    return todos;
  }
}
