import { Component, OnInit } from '@angular/core';
import { refLinks } from '../links';

@Component({
  selector: 'app-braindog',
  templateUrl: 'braindog.component.html',
  styleUrls: ['./braindog.component.scss'],
})
export class BrainDogComponent {
  constructor() {}
  public refLink = refLinks.braindog;
}
