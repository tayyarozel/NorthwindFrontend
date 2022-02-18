import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  //value: apiden gelen değer ve değiştirmek istediğim değer
  //rate:number: benim gönderdiğim değer
  transform(value: number,rate:number): number {
    return value*value*rate/100;
  }

}
