import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppNew';
  name = 'Kunjan Sharma ';
  fruits =['Apple','Banana','Mango','Watermelon'];

  obj = {
    name:"Kumar",
    age:24,
    isMarried:true
  }

  changeData(){
    this.name = 'Aatif Pothawale';
  }

  public mgs = "";



}
