import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SbbCheckboxChange } from '@sbb-esta/angular/checkbox';
import { SbbDateAdapter } from '@sbb-esta/angular/core';
import { SbbDateInputEvent } from '@sbb-esta/angular/datepicker';
import {
  SbbNotificationToast,
  SbbNotificationToastVerticalPosition,
  SbbNotificationType,
} from '@sbb-esta/angular/notification-toast';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-design-pattern',
  templateUrl: './design-pattern.component.html',
  styleUrls: ['./design-pattern.component.css'],
})
export class DesignPatternComponent implements OnDestroy, OnInit {
  date = new FormControl(new Date());

  minDate = new FormControl();
  maxDate = new FormControl();

  toggle = new FormControl(true);
  arrows = new FormControl(false);
  disabled = new FormControl(false);
  readonly = new FormControl(false);
  type: SbbNotificationType = 'success';
  types = ['success', 'info', 'error', 'warn'];
  positions = ['top', 'bottom'];
  position: SbbNotificationToastVerticalPosition = 'bottom';
  name: FormControl = new FormControl('', [Validators.required]);
  linear = true;
  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});
  inputSize: '' | 'short' | 'medium' | 'long' = '';
  

  private _destroyed = new Subject<void>();

  constructor(
    dateAdapter: SbbDateAdapter<Date>,
    private _notification: SbbNotificationToast,
    private _formBuilder: FormBuilder
  ) {
    this.minDate.setValue(
      dateAdapter.addCalendarMonths(dateAdapter.today(), -6)
    );
    this.maxDate.setValue(
      dateAdapter.addCalendarMonths(dateAdapter.today(), 6)
    );

    this.disabled.valueChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe((value) => (value ? this.date.disable() : this.date.enable()));
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  closedEvent() {
    console.log('CLOSED');
  }

  openedEvent() {
    console.log('OPENED');
  }

  dateChangeEvent($event: SbbDateInputEvent<Date>) {
    console.log('DATE_CHANGED', $event);
  }

  dateInputEvent($event: SbbDateInputEvent<Date>) {
    console.log('DATE_INPUT', $event);
  }

  toggleDisabled(sbbCheckboxChange: SbbCheckboxChange) {
    sbbCheckboxChange.checked ? this.name.disable() : this.name.enable();
  }

  showNotification() {
    this._notification
      .open('This is a simple test message', {
        type: this.type,
        verticalPosition: this.position,
      })
      .afterOpened()
      .subscribe(() => console.log('opened'));
  }
}
