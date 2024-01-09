import Swiper from 'swiper';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { companies, Company } from './_companies';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperRef') swiperRef: any;
  swiper?: Swiper;

  constructor() {}

  companies: Company[] = companies;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    register();
    const swiperParams = {
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    };
    Object.assign(this.swiperRef?.nativeElement, swiperParams);
    this.swiperRef?.nativeElement.initialize();
  }
}
