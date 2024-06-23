import { Component } from '@angular/core';

@Component({
  selector: 'app-structure-directives',
  templateUrl: './structure-directives.component.html',
  styleUrl: './structure-directives.component.css'
})
export class StructureDirectivesComponent {

  public display= (10 > 5);

  // public fruits = 'Apple';

  public fruits = 'Banana';

  // public juice = 'mangoJuice';

  public juice = 'orangeJuice';

  public peoples = ['Aatif','Kunjan','Piyush','Yash','Zoro'];

  // public object = [
  //   {name:'Aatif',age:22, isMarried:false},
  //   {name:'Kunjan',age:28, isMarried:true},
  //   {name:'Piyush',age:19, isMarried:false}
  // ]

  public object = [
    {name:'Aatif',age:22, isMarried:false,hobbies:['Writing','Reading','Singing']},
    {name:'Kunjan',age:28, isMarried:true, hobbies:['Playing','Reading','Watching Movie']},
    {name:'Piyush',age:19, isMarried:false, hobbies:['Working','Sports','Singing']}
  ]
}
