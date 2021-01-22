import { Pipe, PipeTransform } from '@angular/core';
import { Comic } from './servicios/comics.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Comic[], searchText: string): any[] {
    let result;

    if (!items || !searchText) {
      result = [];
    }
    else{
      searchText = searchText.toLocaleLowerCase();
      result = items.filter(it => {
        return it.nombre.toLocaleLowerCase().includes(searchText);
      });
    }

    return result;
  }
}
