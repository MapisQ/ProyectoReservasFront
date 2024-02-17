import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursPipe'
})
export class HoursPipePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: Date): { date: string, time: string } {
    // Formatear la fecha en formato yyyy-MM-dd
    const formattedDate = this.datePipe.transform(value, 'yyyy-MM-dd') || '';
    // Formatear la hora en formato HH:mm:ss
    const formattedTime = this.datePipe.transform(value, 'HH:mm:ss') || ''; // Usar operador de coalescencia nula

    // Retornar un objeto con la fecha y la hora por separado
    return { date: formattedDate, time: formattedTime };
  }

}
