import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  
  @Output() public childEvent = new EventEmitter;
  fireEvent(){
    this.childEvent.emit("Learning Never Ends");
  }
}
