# **WnFormatter TS**

Simple way to format your date with Pipe.

#### **Installation**

```bash
  npm i date-formatter-ts
```

#### **Sample Usage**

```javascript
// getFormattedDate(date: Date, format: string): string
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
      return 'InvalidDateFormat';
    }
  }
```

#### **Sample Usage**

1) Register the `DateFormatterModule` in your app module.
> `import { DateFormatterModule } from 'wn-formatter/dist/date-formatter'`

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateFormatterModule } from 'wn-formatter/dist/date-formatter'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DateFormatterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
2) Register the Pipe`dateformat` in your app module.

<pre>
// In html file
// @Pipe({ name: 'dateformat' })
// transform(dateValue: any, country: string, format: string)
// dateValue = date
// country = "TH"
// format = "dd-MM-yyyyy"

<p>{{ date | dateformat : "TH" : "dd-MM-yyyyy" }}</p>

// output: 17-10-2566
</pre>

**Accepted Date formats**

- Weekday: **WWW** (Ex: Sun,...,Sat), **WWWW** (Ex: Sunday,...,Monday)

- Day: **D** (Ex: 1,2,..,11,12), **DD** (Ex: 01,02,...,11,12)

- Month: **M** (Ex: 1,2,..,11,12), **MM** (Ex: 01,02,...,11,12), **MMM** (Ex: Jan,..,Dec), **MMMM** (Ex: January,..,December)

- Year: **YY** (Ex: 90,...,22), **YYYY** (Ex: 1990,..,2022)
