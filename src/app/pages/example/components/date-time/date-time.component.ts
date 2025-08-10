import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTimepickerModule } from '@angular/material/timepicker';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    MatTimepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
})
export class DateTimeComponent {
  private datePipe = new DatePipe('en-US');

  dateTimeControl = new FormControl(new Date());
  dateRangeForm = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(new Date()),
  });

  startTimeControl = new FormControl('09:00');
  endTimeControl = new FormControl('17:00');

  get formattedDateTime() {
    const date = this.dateTimeControl.value;
    return date
      ? this.datePipe.transform(date, 'medium') || 'Invalid date'
      : 'No date selected';
  }
}
