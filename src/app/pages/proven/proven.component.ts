import { Component, OnInit } from '@angular/core';
import { refLinks } from '../links';

@Component({
  selector: 'app-proven',
  templateUrl: './proven.component.html',
  styles: [],
})
export class ProvenComponent {
  constructor() {}
  public referUrl = refLinks.proven;
}
