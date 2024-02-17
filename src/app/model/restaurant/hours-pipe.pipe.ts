import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursPipe'
})
export class HoursPipePipe implements PipeTransform {
  
  hour!: string | number;
  minutes!: string | number;

  transform(value: string): string {
    const [hours, minutes] = value.split(':');
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);

    const formattedHour = hour < 10 ? '0' + hour : hour;
    const formattedMinute = minute < 10 ? '0' + minute : minute;

    return `${formattedHour}:${formattedMinute}`;
  }
}
