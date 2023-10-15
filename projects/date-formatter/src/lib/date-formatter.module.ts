import { NgModule } from '@angular/core';
import { DateFormatterComponent } from './date-formatter.component';
import { DateFormatPipe } from './pipes/date-formatter.pipe';
import { DateTimeFormatPipe } from './pipes/datetime-formatter.pipe';



@NgModule({
  declarations: [
    DateFormatPipe,
    DateTimeFormatPipe,
    DateFormatterComponent,
  ],
  imports: [
  ],
  exports: [
    DateFormatPipe,
    DateTimeFormatPipe,
    DateFormatterComponent,
  ]
})
export class DateFormatterModule { }
