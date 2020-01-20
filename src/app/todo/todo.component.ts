import { Component, OnInit } from '@angular/core';
import {APIService} from '../API.service';
import {AppsyncService} from '../appsync.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public allToDos: any = [];
  constructor(private api: APIService, private appsyncService: AppsyncService) { }

  async ngOnInit() {
    const result = await this.api.ListTodos();
    this.allToDos = result.items;
    this.api.OnCreateTodoListener.subscribe({
      next: (todo) => {
        let newtodo = todo;
        this.allToDos.push(newtodo);
      }
    });
  }

  public async createTodo(todoName) {
    const newTodo = {
    name: todoName.value,
    body: 'Sample Description',
    completed : false };
    let result = await this.api.CreateTodo(newTodo);
    
    this.allToDos.push(result);
//Hasdf
    // tslint:disable-next-line:no-debugger
    debugger;

  }

   async listToDos() {
     this.allToDos = await (await this.api.ListTodos()).items;
   }


}
