import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutCartsPageComponent } from './cart-page/layout.component';
import { CarouselComponent } from './components/carousel.component';
import { CollapseMenuComponent } from './components/collapsemenu.component';
import { FeaturedGameComponent } from './featuredgame/featuredgame.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './header/searchBar.component';
import { LayoutMainComponent } from './layout/layout.component';
import { NewReleasesComponent } from './newreleases/newreleases.component';
import { LayoutPowerUpComponent } from './powerup-rewards-page/layout/layout.component';
import { RewardsBarComponent } from './rewardsbar/rewardsbar.component';
import { LayoutSignInComponent } from './sign-in-page/layout/layout.component';
import { LayoutTradeInsComponent } from './trade-ins-page/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutBodyComponent } from './homebody/layout.component';
import { CarouselCardComponent } from './components/carouselCards/carouselCards.component';
import { Card } from './components/carouselCards/cards.model';
import { UserInfoComponent } from './backend/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    CollapseMenuComponent,
    LayoutMainComponent,
    RewardsBarComponent,
    FeaturedGameComponent,
    NewReleasesComponent,
    CarouselComponent,
    LayoutTradeInsComponent,
    LayoutPowerUpComponent,
    LayoutSignInComponent,
    LayoutCartsPageComponent,
    LayoutBodyComponent,
    CarouselCardComponent,
    UserInfoComponent


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
