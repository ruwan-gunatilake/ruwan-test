import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'busStatus'
})
export class BusStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return 'Unknown';
    }
    if (value < 0) {// any negative value is considered as earlier than scheduled time as per example and screenshot provided
      return 'Early';
    } else if (value < 250) {// slight delay upto 250 seconds is considered ontime as per example and screenshot provided
      return 'On Time';
    } else {
      return 'Late';
    }
  }
}
