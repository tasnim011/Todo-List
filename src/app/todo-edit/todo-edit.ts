import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  imports: [FormsModule],
  templateUrl: './todo-edit.html',
  styleUrl: './todo-edit.css'
})
export class TodoEditComponent {
  @Input() task!: { id: number, task: string, state: string };
  @Output() taskEdited = new EventEmitter<{ id: number, task: string, state: string }>();
  @Output() cancelEdit = new EventEmitter<void>();

  changeState() {
    this.task.state = this.task.state === "pending" ? "done" : "pending";
  }

  save() {
    this.taskEdited.emit(this.task);
  }

  cancel() {
    this.cancelEdit.emit();
  }
}
