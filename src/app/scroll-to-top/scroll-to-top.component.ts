import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent implements OnInit {
  showScroll: boolean = false;
  showScrollHeight = 200;
  hideScrollHeight = 200;

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(window.scrollY);

    if (window.scrollY > 300) {
      this.showScroll = true;
    } else {
      this.showScroll = false;
    }
  }

  ngOnInit() {}

  scrollToTop() {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.scrollTo(0, 0);
    }
  }
}
