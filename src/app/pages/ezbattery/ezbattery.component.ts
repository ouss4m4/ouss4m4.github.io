import { Component, OnInit } from '@angular/core';
import { refLinks } from '../links';

@Component({
  selector: 'app-ezbattery',
  templateUrl: './ezbattery.component.html',
  styleUrls: ['ezbattery.component.scss'],
})
export class EzbatteryComponent {
  constructor() {}
  public refUrl = refLinks.battery;
}
