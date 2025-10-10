import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  todos = [
    {id : 1, task : "Présenter les composants Angular", state:"done"},
    {id : 2, task : "Présenter les types de binding", state:"pending"},
    {id : 3, task : "Blocks itératifs et conditionnels", state:"pending"}
  ]
  action = "";
  taskToEdit = {
    id : 0,
    task : "",
    state : ""
  };

  setAction(newAction : string) : void{
    this.action = newAction;
  }

  addTask(newTask : string) : void{
    const task = {
      id : this.todos[this.todos.length - 1].id + 1,
      task : newTask,
      state : 'pending'
    };
    this.todos = [...this.todos, task];
    this.setAction("");
  }

  showTaskToEdit(task : {id: number, task : string, state : string}){
    this.taskToEdit = {...task};
    this.setAction("edit");
  }

  editTask(){
    //console.log(JSON.stringify(this.taskToEdit))
    this.todos = this.todos.map(
      todo => (todo.id == this.taskToEdit.id)?this.taskToEdit:todo
    );
    this.setAction("");
  }

  changeState(){
    //console.log("change state : " + this.taskToEdit.state)
    this.taskToEdit.state = (this.taskToEdit.state == "pending")?"done":"pending";
  }
}