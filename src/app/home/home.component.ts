import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, keyframes, query, stagger, state, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs/Observable';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slide', [
      state('*', style({opacity: 0, transform: 'translateY(0)'})),
      transition('* => *',
        animate('8990ms linear', keyframes([
          style({opacity: 0, transform: 'translateY(0)', offset: 0.0}),
          style({opacity: 0, transform: 'translateY(0)', offset: 0.01}),
          style({opacity: 0.5, transform: 'translateY(-5px)', offset: 0.08}),
          style({opacity: 1, transform: 'translateY(-20px)', offset: 0.30}),
          style({opacity: 1, transform: 'translateY(-40px)', offset: 0.95}),
          style({opacity: 0, transform: 'translateY(-40px)', offset: 0.99}),
          style({opacity: 0, transform: 'translateY(0)', offset: 1})
        ])))
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  private carouselImages: Array<string> = ['assets/images/pexels-photo-296878.jpeg', 'assets/images/pexels-photo-301987.jpeg',
    'assets/images/pexels-photo-348517.jpeg', 'assets/images/pexels-photo-889545.jpeg'];
  private alive: boolean;

  currentImage: string = this.carouselImages[0];

  constructor() {
    this.alive = true;
  }

  ngOnInit() {
    let incr = 0;
    const interval = IntervalObservable.create(9000);
    interval.subscribe(() => {
      if (incr < this.carouselImages.length - 1) {
        incr++;
      } else {
        incr = 0;
      }
      this.currentImage = this.carouselImages[incr];
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
