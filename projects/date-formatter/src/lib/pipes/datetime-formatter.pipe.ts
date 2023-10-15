import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'datetimeformat',
})
export class DateTimeFormatPipe implements PipeTransform {

  dateFormat: string[] = ['ddMMyyyy', 'dd/MM/yyyy', 'dd-MM-yyyy']

  transform(dateValue: any, country: string, format: string): unknown {
    let plusYear = 0;
    if (country === 'TH') {
      plusYear = 543;
    } else {
      plusYear = 0;
    }
    if (this.dateFormat.includes(format)) {
      var currentDate = new Date(dateValue);
      const datePipe = new DatePipe('en-US');
      const day = currentDate.getDate();
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear() + plusYear;
      currentDate.setFullYear(year, month, day);
      const date = datePipe.transform(currentDate, format);
      return date;
    } else {
      return 'Invalid Date Format';
    }
  }
}