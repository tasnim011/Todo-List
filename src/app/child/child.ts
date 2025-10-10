import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input() titleParam? : string
  @Output() titleChanged = new EventEmitter<string>()

  newTitle = "";

  changeTitle(){
    this.newTitle = this.titleParam + "-updated";
    this.titleChanged.emit(this.newTitle);
  }

}