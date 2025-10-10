import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css'
})
export class TodoAddComponent {
  @Output() taskAdded = new EventEmitter<string>();
  @Output() cancelAdd = new EventEmitter<void>();

  newTask = "";

  add() {
    if (this.newTask.trim() !== "") {
      this.taskAdded.emit(this.newTask);
      this.newTask = "";
    }
  }

  cancel() {
    this.cancelAdd.emit();
  }
}
