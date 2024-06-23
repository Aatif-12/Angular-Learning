import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-dir',
  templateUrl: './ng-class-dir.component.html',
  styleUrl: './ng-class-dir.component.css'
})
export class NgClassDirComponent {

  public condition = false;
  public cssClass = "mycolor myWriting";
  public cssArray=["mycolor","myWriting"];

public c = new myClass();

}

class myClass{
  mycolor = true;
  myWriting = false;
}