import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: "app-digital-clock",
  templateUrl: "./digital-clock.component.html",
  styleUrls: ["./digital-clock.component.css"],
})
export class DigitalClockComponent implements OnInit, OnDestroy {
  currentDate: Date = new Date();
  private subscription: Subscription;

  constructor() {}
  ngOnDestroy(): void {
   if (this.subscription) {
     this.subscription.unsubscribe();
   }
  }

  ngOnInit(): void {
     this.subscription = interval(1000).subscribe(() => {
       this.currentDate = new Date();
     });
  }
}
