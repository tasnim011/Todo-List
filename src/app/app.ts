import { Component } from '@angular/core';
import { Todo } from "./todo/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [Todo],
})
export class App {
  title = 'firstApp';
}
