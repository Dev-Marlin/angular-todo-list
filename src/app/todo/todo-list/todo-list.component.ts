import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';
import { TodoCreateComponent } from '../todo-create/todo-create.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private readonly todoService: TodoService,
              private readonly todoCreateComponent: TodoCreateComponent,
  ) {}

  todos = this.todoService.todos;
  currentValue: boolean = false;

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

  ngOnInit(): void {
    this.todoService.currentToggle.subscribe((value)=> {
      this.currentValue = value;
    })
  }

  async newTodo(title: string) {
    await this.todoService.addTodo(title).subscribe(() => {
      this.todos = this.todoService.getTodos();
    });
  }
}