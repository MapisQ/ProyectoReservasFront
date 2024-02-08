import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(dateString: string): string {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // Si la cadena no se puede convertir a una fecha válida, devolver la cadena original
      return dateString;
    }
    const monthName=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const monthNumber = date.getMonth(); // Obtener el número del mes de la fecha
    const month = monthName[monthNumber];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
}


