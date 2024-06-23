import { Component } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
  // providers: [StudentServiceService]
  //app.module.ts me providers me dal diye to yaha dalne ki jarurat nahi hai
})
export class StudentListComponent {

//  public students = [
//     {name: 'John', age: 20,class:'10th'},
//     {name: 'Doe', age: 22,class:'12th'},
//     {name: 'Smith', age: 25,class:'11th'}
//   ];


public students : any;
constructor(private std: StudentServiceService) { 
  this.students = std.getStudents();
}

}
