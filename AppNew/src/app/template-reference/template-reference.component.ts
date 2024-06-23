import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrl: './template-reference.component.css'
})
export class TemplateReferenceComponent {

    public displayName = "";


  // getName(value: string){
  //   console.log(value);

  //   this.displayName = value;
  // }

  getName(fname: string, lname: string){
    
    this.displayName = fname + " " + lname;
  }
}
