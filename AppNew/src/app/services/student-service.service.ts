import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }
  getStudents(){
    return [
      {name: 'John', age: 20,class:'10th'},
      {name: 'Doe', age: 22,class:'12th'},
      {name: 'Smith', age: 25,class:'11th'}
    ]
  }
}
