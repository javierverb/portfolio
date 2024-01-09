import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    ScrollToTopComponent,
    CardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
