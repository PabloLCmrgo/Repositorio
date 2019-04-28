import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    
    if (!images || images.length == 0)
    return 'assets/spotimg/noimage.png';
    return images[0].url;
    return null;
  }

}
