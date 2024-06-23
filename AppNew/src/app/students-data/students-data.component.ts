import { Component } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-students-data',
  templateUrl: './students-data.component.html',
  styleUrl: './students-data.component.css',
  // providers: [StudentServiceService]
})
export class StudentsDataComponent {

  public students : any;
  constructor(private std: StudentServiceService) { 
    this.students = std.getStudents();
  }
}
