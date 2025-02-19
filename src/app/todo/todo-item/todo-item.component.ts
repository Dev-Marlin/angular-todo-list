import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input('todo') todo: Todo | null = null;
  @Output('update') update = new EventEmitter<Todo>();
  @Input('td') td: boolean = false;//td: boolean = true;

  toggleCompleted() {
    if (!this.todo) {
      throw new Error('cannot toggle complete on null');
    }
    this.update.emit({
      ...this.todo,
      completed: !this.todo.completed,
    });
    //this.td  = this.todo ? this.todo.completed : false;
    this.td = !this.td;
  }
}
