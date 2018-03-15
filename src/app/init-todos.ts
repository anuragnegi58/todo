import {isUndefined} from 'util';

export class InitTodos {
  load() {
    if (localStorage.getItem('todos') === null || isUndefined(localStorage.getItem('todod')  )) {
      console.log('Creating Todos');
      const todos = [
        {
          text: 'Attend Meeting',
        },
        {
          text: 'Have Breakfast',
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      console.log( 'Found Todos');
    }
  }
}
