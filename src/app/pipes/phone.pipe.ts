import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    const phoneStr: string = phone.toString();
    return '+' + phoneStr.substr(0, 2)
            + ' (' + phoneStr.substr(2, 3)
            + ') ' + phoneStr.substr(5, 3)
            + '-' + phoneStr.substr(8, 2)
            + '-' + phoneStr.substr(10, 2);
  }

}
