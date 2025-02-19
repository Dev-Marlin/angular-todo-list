import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoModule],
  providers: [TodoCreateComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
