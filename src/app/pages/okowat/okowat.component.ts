import { Component, OnInit } from '@angular/core';
import { refLinks } from '../links';

@Component({
  selector: 'app-okowat',
  templateUrl: './okowat.component.html',
  styleUrls: ['okowat.component.scss'],
})
export class OkowatComponent {
  constructor() {}
  public refUrl = refLinks.okowat;
}
