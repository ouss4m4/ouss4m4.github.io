import { Component, OnInit } from '@angular/core';
import { refLinks } from '../links';

@Component({
  selector: 'app-dofast',
  templateUrl: './dofast.component.html',
  styleUrls: ['./dofast.component.scss'],
})
export class DofastComponent {
  public refUrl = refLinks.dofasting;
}
