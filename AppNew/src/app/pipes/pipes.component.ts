import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  public className = "learning never ends";
  public name = "AATIF POTHAWALE";
  public obj = {
    name:'Kunjan',
    age:21,
    height:5.7
  }

  public myDate = new Date();
}
