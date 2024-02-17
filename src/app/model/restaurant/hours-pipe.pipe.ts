import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursPipe'
})
export class HoursPipePipe implements PipeTransform {


  transform(value: string): string {
    const [hours, minutes, seconds] = value.split(':');
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const second = parseInt(seconds, 10);

    const formattedHour = hour < 10 ? '0' + hour : hour;
    const formattedMinute = minute < 10 ? '0' + minute : minute;
    const formattedSecond = second < 10 ? '0' + second : second;

    return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
  }
}
