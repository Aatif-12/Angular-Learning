import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {

  std = new Student();
  save(formData: any){
    // console.log(formData.value);

    // const std = new Student(formData.name, formData.age, formData.email);
    // console.log(std);
    console.log(this.std);
  }
  constructor() { 
    this.std.country = "";
  }
}
