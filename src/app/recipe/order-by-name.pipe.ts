import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './recipe.model';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Pipe({
  name: 'orderByName'
})
export class OrderByNamePipe implements PipeTransform {

  transform(value: Recipe[], args?: any): Recipe[] {
    return value.sort( (first, second) => {
      switch (args) {
        case 'byIdInstead':
          return first.id - second.id;
        case 'name':
        default:
            return first.name.localeCompare(second.name);
      }
    });
  }

}
