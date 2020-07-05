import { Component, OnInit } from '@angular/core';
import { refLinks } from '../links';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

declare let gtag: Function;
declare let fbq: Function;
@Component({
  selector: 'app-braindog',
  templateUrl: 'braindog.component.html',
  styleUrls: ['./braindog.component.scss'],
})
export class BrainDogComponent implements OnInit {
  title: 'Train your dog like a champ';
  public refLink = refLinks.braindog;
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router
  ) {
    this.router.events.subscribe((y: NavigationEnd) => {
      if (y instanceof NavigationEnd) {
        gtag('config', 'UA-168145101-1', { page_path: y.url });
        fbq('track', 'PageView');
        fbq('track', 'DogView');
      }
    });
  }
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: `Develops your Dog's "Hidden Intelligence" To eliminate bad behavior and Create the obedient, well-behaved pet of your dreams' `,
    });
    this.metaTagService.updateTag({
      name: 'keywords',
      content: `train dog,train puppy,dogs,puppies,new dog, new puppy,dog trainer,puppy trainer`,
    });
  }
}
