import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDishes'
})
export class FilterDishesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
