import { Component, OnInit } from '@angular/core';
import { refLinks } from '../links';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

export declare let gtag: (...args) => void;
export declare let fbq: (...args) => void;

@Component({
  selector: 'app-manifestation',
  templateUrl: './manifestation.component.html',
  styleUrls: ['./manifestation.component.scss'],
})
export class ManifestationComponent implements OnInit {
  title = '5 minutes manifestation';
  public refLink = refLinks.manifestation;
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router
  ) {
    this.router.events.subscribe((y: NavigationEnd) => {
      if (y instanceof NavigationEnd) {
        gtag('config', 'UA-168145101-1', { page_path: y.url });
        fbq('track', '5 min Manifest', '');
      }
    });
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: `Discover How To Manifest CASH, Health and Happiness, Starting In The Next 24 Hours...`,
    });
    this.metaTagService.updateTag({
      name: 'keywords',
      content: `5 minute manifestation, minute manifestation, 5 minute manifestation review`,
    });
  }
}
