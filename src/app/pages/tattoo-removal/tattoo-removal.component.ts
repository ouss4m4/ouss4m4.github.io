import { Component, OnInit } from '@angular/core';
import { refLinks } from '../links';

@Component({
  selector: 'app-tattoo-removal',
  templateUrl: './tattoo-removal.component.html',
  styleUrls: ['tattoo-removal.component.scss'],
})
export class TattooRemovalComponent {
  constructor() {}
  public referUrl = refLinks.tatoo;
}
