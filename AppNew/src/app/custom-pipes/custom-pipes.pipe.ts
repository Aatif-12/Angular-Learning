import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {

  // transform(value: number, ...args: number[]): unknown {
  //   // return value + 10;
  //   // return value * value;
  //   // return value * value * value;

  //   // const [a] = args
  //   // return Math.pow(value, a);
  //   const [a,b] = args
  //   return value + a + b;
  // }


  //This is for single argument
  transform(value: number, num: number): unknown {
    return value + num;
  }
}
