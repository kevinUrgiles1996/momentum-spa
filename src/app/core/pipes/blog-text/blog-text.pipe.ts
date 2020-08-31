import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogText'
})
export class BlogTextPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 100) + ' ...';
  }

}
