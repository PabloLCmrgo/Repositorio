import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

@Pipe({
  name: 'findname'
})
export class FindNamePipe implements PipeTransform {

  transform(id: number, array: any[], propid: string, propname: string  ): string {
      let desc: string;
      for( let item= 0; item< array.length; item++ ){
      if(id== Number.parseInt(array[item][propid]) ){
        desc = array[item][propname];
      }

      }

    return desc;
  }

}
