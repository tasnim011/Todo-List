import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoAddComponent } from '../todo-add/todo-add';
import { TodoEditComponent } from '../todo-edit/todo-edit';
@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, TodoAddComponent, TodoEditComponent],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  todos = [
    { id: 1, task: "Présenter les composants Angular", state: "done" },
    { id: 2, task: "Présenter les types de binding", state: "pending" },
    { id: 3, task: "Blocks itératifs et conditionnels", state: "pending" }
  ];

  action = "";
  taskToEdit = { id: 0, task: "", state: "" };

  setAction(newAction: string) {
    this.action = newAction;
  }

  addTask(newTask: string) {
    const task = {
      id: this.todos[this.todos.length - 1].id + 1,
      task: newTask,
      state: 'pending'
    };
    this.todos = [...this.todos, task];
    this.setAction("");
  }

  showTaskToEdit(task: { id: number, task: string, state: string }) {
    this.taskToEdit = { ...task };
    this.setAction("edit");
  }

  editTask(updatedTask: { id: number, task: string, state: string }) {
    this.todos = this.todos.map(todo =>
      todo.id === updatedTask.id ? updatedTask : todo
    );
    this.setAction("");
  }

  deleteTask(id: number) {
    if (confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
}