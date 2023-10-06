import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'history'
})
export class HistoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){
      return `<i class="fa fa-clock-o" aria-hidden="true"></i>${value}`;
    } else {
      return '';
    }
  }

}
