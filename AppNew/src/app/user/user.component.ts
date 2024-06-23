import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 
  public value:number = 0;

// addNumber(value:number){
//   this.value++;
// }
// subNumber(value:number){
//   this.value--;
// }

public counter(str:string){
(str == 'add') ? this.value++ : this.value--;
}
}