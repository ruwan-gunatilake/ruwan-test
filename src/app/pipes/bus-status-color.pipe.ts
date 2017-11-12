import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busStatusColor'
})
export class BusStatusColorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return 'unknown';
    }
    if (value < 0) {// any negative value is considered as earlier than scheduled time as per example and screenshot provided
      return 'early';
    } else if (value < 250) {// slight delay upto 250 seconds is considered ontime as per example and screenshot provided
      return 'ontime';
    } else {
      return 'late';
    }
  }

}
