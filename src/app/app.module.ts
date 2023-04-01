import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AboutComponent, PortfolioComponent, ContactComponent, ScrollToTopComponent, CardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
