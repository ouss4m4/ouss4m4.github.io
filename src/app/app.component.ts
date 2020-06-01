import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare let gtag: Function;
declare let fbq: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  constructor(private router: Router) {
    router.events.subscribe((y: NavigationEnd) => {
      if (y instanceof NavigationEnd) {
        gtag('config', 'UA-168145101-1', { page_path: y.url });
        fbq('track', 'PageView');
        console.log('sending analytic');
      }
    });
  }
}
