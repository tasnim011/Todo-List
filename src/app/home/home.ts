import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Child],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title = "Home Component";
  url1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png";
  url2 = "https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif";
  url = this.url1;
  
  changeLogo = ()=>{
    console.log("Changing logo ...");
    this.url = (this.url === this.url1)?this.url2:this.url1;
  }

  updateTitle(newTitle : string){
    this.title = newTitle;
  }
}