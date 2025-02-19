import { Component, EventEmitter, Output,Input} from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
})
export class TodoCreateComponent {
  @Output('newTodo') newTodo = new EventEmitter<string>();

  showToggled: boolean = false;
  todo: string = '';

  constructor(private todoService : TodoService)
  {

  }

  onCheckboxChange()
  {
    this.todoService.changeToggle(this.showToggled);
  }

  /*getShowToggled()
  {
    return this.showToggled;
  }*/

  submit() {
    this.newTodo.emit(this.todo);
  }

  /*
  toggle(){
    console.log("before: " + this.showToggled);
    this.showToggled = !this.showToggled;
    console.log("after: " + this.showToggled);
  }*/
}
