import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Subscription, interval } from 'rxjs';

export interface AlertModel {
  title?: string;
  message: string;
}

@Component({
  selector: 'alert',
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h4>{{title }}</h4>
      </div>
      <div class="modal-body">
      <div class="timer">
      <span class="titleC" id="days"> {{daysToDday}} </span>Day(s)
      <span class="titleC" id="hours"> {{hoursToDday}} </span>Hrs 
      <span class="titleC" id="minutes"> {{minutesToDday}} </span>Min
      <span class="titleC" id="seconds"> {{secondsToDday}} </span>S
  </div>      </div>
      <div class="modal-footer">
        <button type="button" class="buttonStyle2" (click)="close()">OK</button>
      </div>
    </div>
  `,
  styleUrls:['./alert.component.css']
})
export class AlertComponent extends SimpleModalComponent<AlertModel, null> implements AlertModel {
  title: string;
  message: string;
  constructor() {
    super();
  }
  private subscription: Subscription;

    public dateNow = new Date();
    public dDay = new Date('Nov 03 2021 00:00:00');
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    public timeDifference;
    public secondsToDday;
    public minutesToDday;
    public hoursToDday;
    public daysToDday;


    private getTimeDifference () {
        this.timeDifference = this.dDay.getTime() - new  Date().getTime();
        this.allocateTimeUnits(this.timeDifference);
    }

  private allocateTimeUnits (timeDifference) {
        this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
        this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
        this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
        this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

    ngOnInit() {
       this.subscription = interval(1000)
           .subscribe(x => { this.getTimeDifference(); });
    }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }

 
}
