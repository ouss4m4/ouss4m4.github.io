import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Meta } from '@angular/platform-browser';

export declare let gtag: (...args) => void;
export declare let fbq: (...args) => void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private metaTagService: Meta) {
    router.events.subscribe((y: NavigationEnd) => {
      if (y instanceof NavigationEnd) {
        gtag('config', 'UA-168145101-1', { page_path: y.url });
        fbq('track', 'PageView');
      }
    });
  }
  ngOnInit() {
    this.metaTagService.addTags([
      {
        name: 'description',
        content: `Best deals around the internet ! our AI boosted bots scraps the four corners of  the internet to find the best sales for you, never miss a great sale again`,
      },
      {
        name: 'keywords',
        content:
          'sales sniper,sales-sniper,salesniper,salessniper,best deals,sale,sales',
      },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
