import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  constructor() {}
  public pages: { path: string; imageUrl: string; summary: string }[] = [
    {
      path: '/tattoo-removal',
      imageUrl: 'assets/img/tattoo-removal/2.png',
      summary:
        'Get rid of your embarassing tattoo with this amazing combination of home natural products',
    },
    {
      path: '/ezbattery',
      imageUrl: 'assets/img/ezbattery/battery.jpg',
      summary:
        'Bringing old batteries back to life is simple with EZ Battery Reconditioning™',
    },
  ];
}
