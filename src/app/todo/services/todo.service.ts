import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http = inject(HttpClient);

  private todoId = 1;

  todos: Observable<Todo[]> = this.http.get<Todo[]>(`${environment.api}`);

  public getTodos(): Observable<Todo[]>
  {
    return this.http.get<Todo[]>(`${environment.api}`);
  }

  addTodo(title: string){
    const todo = {
      id: this.todoId++,
      title: title,
      completed: false,
    };

    return this.http.post(`${environment.api}`, todo);
  }

  async updateTodo(updatedTodo: Todo) {
    const foundTodo =  this.http.get<Todo[]>(`${environment.api}/${updatedTodo.id}`);
    if (!foundTodo) {
      throw new Error('todo not found');
    }

    this.http
    .put(`${environment.api}/${updatedTodo.id}`, updatedTodo)
    .subscribe((response: any) => {
      console.log('Server response:', response);
    });

    return foundTodo;
  }
}
